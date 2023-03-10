const query = `
    query GetUserArticles($page: Int!) {
        user(username: "avik6028") {
            publication {
                posts(page: $page) {
                    dateAdded
                    title
                    brief
                    slug
                }
            }
        }
    }
`;

const variables = { page: 0 };

export const fetchBlogs = async () => {
  const data = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const result = await data.json();
  const articles = result.data.user.publication.posts;
  return articles;
};
