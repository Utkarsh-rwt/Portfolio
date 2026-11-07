import fs from "fs/promises";
import path from "path";
import getLeetCodeRating from "./leetcoderating";
import getCodeChefRating from "./codechefrating";
import getCodeforcesRating from "./codeforcesrating";

type RatingPlatform = "leetcode" | "codeforces" | "codechef";

type CachedRating = {
  rating: number;
  updatedAt: string;
};

type RatingsDatabase = Partial<Record<RatingPlatform, CachedRating>>;

const databasePath = path.join(process.cwd(), "data/ratings.json");
const cacheDuration = 24 * 60 * 60 * 1000;

const readDatabase = async (): Promise<RatingsDatabase> => {
  try {
    return JSON.parse(await fs.readFile(databasePath, "utf8")) as RatingsDatabase;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return {};
    throw error;
  }
};

const writeDatabase = async (database: RatingsDatabase) => {
  await fs.mkdir(path.dirname(databasePath), { recursive: true });
  await fs.writeFile(databasePath, JSON.stringify(database, null, 2));
};

const isFresh = (entry?: CachedRating) =>
  Boolean(entry && Date.now() - new Date(entry.updatedAt).getTime() < cacheDuration);

const fetchRating = (platform: RatingPlatform) => {
  if (platform === "leetcode") return getLeetCodeRating("utkarsh-rwt");
  if (platform === "codeforces") return getCodeforcesRating("utkarshrawat");
  return getCodeChefRating("utkarshrawat");
};

export const getCachedRatings = async () => {
  const database = await readDatabase();
  const updatedDatabase = { ...database };

  for (const platform of ["leetcode", "codeforces", "codechef"] as RatingPlatform[]) {
    if (isFresh(database[platform])) continue;
    updatedDatabase[platform] = {
      rating: Math.round(await fetchRating(platform)),
      updatedAt: new Date().toISOString(),
    };
  }

  if (JSON.stringify(database) !== JSON.stringify(updatedDatabase)) {
    await writeDatabase(updatedDatabase);
  }

  return updatedDatabase;
};

export const getCachedRating = async (platform: RatingPlatform) => {
  const ratings = await getCachedRatings();
  const rating = ratings[platform];
  if (!rating) throw new Error(`No cached ${platform} rating is available`);
  return rating;
};
