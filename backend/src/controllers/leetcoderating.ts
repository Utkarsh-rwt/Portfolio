const getLeetCodeRating = async (username: string) => {
  const response = await fetch("https://leetcode.com/graphql/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Origin": "https://leetcode.com",
      "Referer": "https://leetcode.com/",
      "User-Agent": "Mozilla/5.0",
    },
    body: JSON.stringify({
      operationName: "userContestRanking",
      query: `
        query userContestRanking($username: String!) {
          userContestRanking(username: $username) {
            rating
          }
        }
      `,
      variables: {
        username,
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`LeetCode request failed with status ${response.status}`);
  }

  const data = await response.json();
  const rating = data.data?.userContestRanking?.rating;

  if (typeof rating !== "number") {
    throw new Error(`LeetCode user not found: ${username}`);
  }

  return Math.round(rating);
};

export default getLeetCodeRating;