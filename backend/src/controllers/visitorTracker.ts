import fs from "fs/promises";
import path from "path";

type GeoLocation = {
  address: string | null;
  city: string | null;
  region: string | null;
  country: string | null;
  latitude: number | null;
  longitude: number | null;
};

export type VisitorRecord = {
  visitedAt: string;
  ip: string;
  geo: GeoLocation;
  browser: string;
};

type IpApiResponse = {
  city?: string;
  region?: string;
  country_name?: string;
  latitude?: number;
  longitude?: number;
  error?: boolean;
  reason?: string;
};

const databasePath = path.join(process.cwd(), "data/visitors.json");
let writeQueue = Promise.resolve();

const readDatabase = async (): Promise<VisitorRecord[]> => {
  try {
    return JSON.parse(await fs.readFile(databasePath, "utf8")) as VisitorRecord[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }
};

const writeDatabase = async (records: VisitorRecord[]) => {
  await fs.mkdir(path.dirname(databasePath), { recursive: true });
  await fs.writeFile(databasePath, JSON.stringify(records, null, 2));
};

const getGeoLocation = async (ip: string): Promise<GeoLocation> => {
  const unavailable: GeoLocation = {
    address: null,
    city: null,
    region: null,
    country: null,
    latitude: null,
    longitude: null,
  };

  if (ip === "unknown" || ip === "::1" || ip.startsWith("127.") || ip.startsWith("10.") || ip.startsWith("192.168.")) {
    return unavailable;
  }

  try {
    const response = await fetch(`https://ipapi.co/${encodeURIComponent(ip)}/json/`, {
      signal: AbortSignal.timeout(3000),
    });
    if (!response.ok) {
      console.warn(`Visitor geo lookup failed with status ${response.status}`);
      return unavailable;
    }

    const data = await response.json() as IpApiResponse;
    if (data.error) {
      console.warn(`Visitor geo lookup failed: ${data.reason ?? "unknown error"}`);
      return unavailable;
    }

    const parts = [data.city, data.region, data.country_name].filter(Boolean);
    return {
      address: parts.length > 0 ? parts.join(", ") : null,
      city: data.city ?? null,
      region: data.region ?? null,
      country: data.country_name ?? null,
      latitude: typeof data.latitude === "number" ? data.latitude : null,
      longitude: typeof data.longitude === "number" ? data.longitude : null,
    };
  } catch (error) {
    console.warn("Visitor geo lookup could not be completed", error);
    return unavailable;
  }
};

const getClientIp = (request: { ip?: string; socket: { remoteAddress?: string } }) =>
  request.ip ?? request.socket.remoteAddress ?? "unknown";

export const recordVisitor = async (
  request: { ip?: string; socket: { remoteAddress?: string }; get: (name: string) => string | undefined },
) => {
  const ip = getClientIp(request);
  const record: VisitorRecord = {
    visitedAt: new Date().toISOString(),
    ip,
    geo: await getGeoLocation(ip),
    browser: request.get("user-agent") ?? "unknown",
  };

  writeQueue = writeQueue.then(async () => {
    const records = await readDatabase();
    await writeDatabase([record, ...records]);
  });
  await writeQueue;
};
