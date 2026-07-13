async function getCodeforcesRating(username: string) {
  const url = `https://codeforces.com/api/user.info?handles=${username}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch Codeforces data");
  }

  const data = await response.json();

  return data.result[0].rating;
}

export default getCodeforcesRating;