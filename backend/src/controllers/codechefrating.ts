
export default async function getCodechefRating(username: string) {
  const response = await fetch(
    `https://www.codechef.com/users/${username}`
  );

  const html = await response.text();

  const match = html.match(
    /<div class="rating-number">\s*([0-9?]+)\s*</m
  );

  if (!match) {
    throw new Error("Rating not found");
  }

  return Number(match[1].replace("?", ""));
}