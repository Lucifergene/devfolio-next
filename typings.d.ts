export type AuthorProps = {
  name: string;
  role: string;
};

export type PostItemProps = {
  title: string;
  href: string;
  category: {
    name: string;
  };
  description: string;
  authors: AuthorProps[];
};

export type ProjectProps = {
  title: string;
  type: string;
  imageUrl: string;
  bio: string;
  githubURL: string;
  tags: string[];
};

export type IContactProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type IPostItemProps = {
  title: string;
  brief: string;
  publishedAt: string;
  slug: string;
};

// Define types for the Hashnode API response
export type HashnodePost = {
  node: {
    publishedAt: string;
    title: string;
    brief: string;
    slug: string;
  };
};

export type HashnodeResponse = {
  data?: {
    publication?: {
      posts?: {
        edges?: HashnodePost[];
      };
    };
  };
};
