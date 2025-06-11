import { HashnodePost, HashnodeResponse, IPostItemProps } from "../../typings";

const variables = { page: 0 };

function transformResponse(response: HashnodeResponse): IPostItemProps[] {
  const posts = response?.data?.publication?.posts?.edges || [];

  return posts.map((post: HashnodePost) => ({
    title: post.node.title,
    brief: post.node.brief,
    publishedAt: post.node.publishedAt,
    slug: post.node.slug,
  }));
}

export const fetchBlogs = async (count: number) => {
  const query = `
    query Publication {
    publication(host: "blog.avikkundu.com") {
        isTeam
        title
        posts(first: ${count}) {
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
