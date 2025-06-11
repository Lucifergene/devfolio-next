import ClientRedirects from "./ClientRedirects";

interface RedirectsPageProps {
  params: Promise<{
    redirects: string;
  }>;
}

const RedirectsPage = async ({ params }: RedirectsPageProps) => {
  const { redirects } = await params;

  return <ClientRedirects redirects={redirects} />;
};

export default RedirectsPage;
