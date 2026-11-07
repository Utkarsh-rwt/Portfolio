import fs from "fs/promises";
import path from "path";

type RatingPoint = {
  label: string;
  rating: number;
};

type HistoryEntry = {
  points: RatingPoint[];
  updatedAt: string;
};

type HistoryDatabase = Partial<Record<"codeforces" | "codechef", HistoryEntry>>;

const databasePath = path.join(process.cwd(), "data/ratings-history.json");
const cacheDuration = 24 * 60 * 60 * 1000;

const readDatabase = async (): Promise<HistoryDatabase> => {
  try {
    return JSON.parse(await fs.readFile(databasePath, "utf8")) as HistoryDatabase;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return {};
    throw error;
  }
};

const writeDatabase = async (database: HistoryDatabase) => {
  await fs.mkdir(path.dirname(databasePath), { recursive: true });
  await fs.writeFile(databasePath, JSON.stringify(database, null, 2));
};

const isFresh = (entry?: HistoryEntry) =>
  Boolean(entry && Date.now() - new Date(entry.updatedAt).getTime() < cacheDuration);

const fetchCodeforcesHistory = async (username: string): Promise<RatingPoint[]> => {
  const response = await fetch(`https://codeforces.com/api/user.rating?handle=${username}`);
  if (!response.ok) throw new Error("Failed to fetch Codeforces rating history");

  const data = await response.json() as {
    status: string;
    result: Array<{ contestName: string; newRating: number; ratingUpdateTimeSeconds: number }>;
  };

  if (data.status !== "OK") throw new Error("Codeforces rating history was unavailable");

  return data.result.map((contest) => ({
    label: new Date(contest.ratingUpdateTimeSeconds * 1000).toLocaleDateString("en", {
      month: "short",
      year: "numeric",
    }),
    rating: contest.newRating,
  }));
};

const fetchCodechefHistory = async (username: string): Promise<RatingPoint[]> => {
  const response = await fetch(`https://www.codechef.com/users/${username}`);
  if (!response.ok) throw new Error("Failed to fetch CodeChef rating history");

  const html = await response.text();
  const match = html.match(/var\s+all_rating\s*=\s*(.*?);/s);
  if (!match) throw new Error("CodeChef rating history was unavailable");

  const entries = JSON.parse(match[1]) as Array<{
    name?: string;
    end_date?: string;
    rating?: number | string;
  }>;

  return entries
    .map((entry) => ({
      label: entry.end_date
        ? new Date(entry.end_date).toLocaleDateString("en", { month: "short", year: "numeric" })
        : entry.name || "Contest",
      rating: Number(entry.rating),
    }))
    .filter((entry) => Number.isFinite(entry.rating));
};

export const getCachedRatingHistory = async (
  platform: "codeforces" | "codechef",
  username: string,
) => {
  const database = await readDatabase();
  const cached = database[platform];
  if (cached && isFresh(cached)) return cached.points;

  const points = platform === "codeforces"
    ? await fetchCodeforcesHistory(username)
    : await fetchCodechefHistory(username);

  const updatedDatabase = {
    ...database,
    [platform]: { points, updatedAt: new Date().toISOString() },
  };
  await writeDatabase(updatedDatabase);
  return points;
};
