const getLeetCodeRating =  async (username:string)=>{
  const leetcodeURL= "https://leetcode.com/graphql/"
 
  const response = await fetch(leetcodeURL,{
    method:"Post",
    headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    operationName: "userContestBaseRating",
    query: `
      query userContestBaseRating($userSlug: String!) {
        userContestBaseRating(username: $userSlug) {
          rating
        }
      }
    `,
    variables: {
      userSlug: `${username}`
    }
  })
  })

  const data = await response.json();
  return data.data.userContestBaseRating.rating;

}

export default getLeetCodeRating;