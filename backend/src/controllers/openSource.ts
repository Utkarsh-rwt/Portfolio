import fs from "fs/promises";
import path from "path";

export type PullRequestStatus = "open" | "closed" | "merged" | "unknown";

export type StoredPullRequest = {
  id: string;
  link: string;
  org: string;
  repo: string;
  number: number;
  date: string;
  status: PullRequestStatus;
  title?: string;
};

const databasePath = path.join(process.cwd(), "data/open-source.json");
const githubPullRequestPattern = /^https:\/\/github\.com\/([^/]+)\/([^/]+)\/pull\/(\d+)(?:\/.*)?$/i;

const readDatabase = async (): Promise<StoredPullRequest[]> => {
  try {
    return JSON.parse(await fs.readFile(databasePath, "utf8")) as StoredPullRequest[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }
};

const writeDatabase = async (pullRequests: StoredPullRequest[]) => {
  await fs.mkdir(path.dirname(databasePath), { recursive: true });
  await fs.writeFile(databasePath, JSON.stringify(pullRequests, null, 2));
};

const getStatus = (pullRequest: { state: string; merged_at?: string | null }): PullRequestStatus =>
  pullRequest.merged_at ? "merged" : pullRequest.state === "open" ? "open" : "closed";

export const listPullRequests = async () => readDatabase();

export const addPullRequest = async (link: string) => {
  const match = link.trim().match(githubPullRequestPattern);
  if (!match) throw new Error("Use a GitHub pull request URL such as https://github.com/org/repo/pull/123");

  const [, org, repo, numberText] = match;
  const number = Number(numberText);
  const response = await fetch(`https://api.github.com/repos/${org}/${repo}/pulls/${number}`);
  if (!response.ok) throw new Error("That pull request could not be found on GitHub");

  const data = await response.json() as { title: string; state: string; merged_at?: string | null; created_at: string };
  const pullRequests = await readDatabase();
  const existing = pullRequests.find((pullRequest) => pullRequest.link === link);
  if (existing) return existing;

  const pullRequest: StoredPullRequest = {
    id: `${org}-${repo}-${number}`.toLowerCase(),
    link: link.trim(),
    org,
    repo,
    number,
    date: data.created_at,
    status: getStatus(data),
    title: data.title,
  };
  await writeDatabase([pullRequest, ...pullRequests]);
  return pullRequest;
};

export const refreshPullRequests = async () => {
  const pullRequests = await readDatabase();
  const refreshed = await Promise.all(pullRequests.map(async (pullRequest) => {
    const response = await fetch(`https://api.github.com/repos/${pullRequest.org}/${pullRequest.repo}/pulls/${pullRequest.number}`);
    if (!response.ok) return pullRequest;
    const data = await response.json() as { title: string; state: string; merged_at?: string | null };
    return { ...pullRequest, title: data.title, status: getStatus(data) };
  }));
  await writeDatabase(refreshed);
  return refreshed;
};
