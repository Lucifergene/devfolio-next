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
