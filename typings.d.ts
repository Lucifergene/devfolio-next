export type AuthorProps = {
  name: string;
  role: string;
};

export type PostItemProps = {
  title: string;
  href: string;
  category: {
    name: string;
    color: string;
  };
  description: string;
  authors: AuthorProps[];
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
  dateAdded: string;
  dateUpdated: string;
  slug: string;
};
