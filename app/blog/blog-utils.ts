import { IPostItemProps } from "../../typings";

const query = `
    query Publication {
    publication(host: "blog.avikkundu.in") {
        isTeam
        title
        posts(first: 10) {
            edges {
                node {
                    publishedAt
                    title
                    brief
                    slug
                }
            }
        }
    }
}
`;

const variables = { page: 0 };

function transformResponse(response: any): IPostItemProps[] {
  const posts = response?.data?.publication?.posts?.edges || [];
  
  return posts.map((post: any) => ({
    title: post.node.title,
    brief: post.node.brief,
    publishedAt: post.node.publishedAt,
    slug: post.node.slug
  }));
}

export const fetchBlogs = async () => {
  const data = await fetch("https://gql.hashnode.com/", {
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
  return transformResponse(result);
};
