"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import LoaderSVG from "./LoaderSVG";

interface ClientRedirectsProps {
  redirects: string;
}

const ClientRedirects: React.FC<ClientRedirectsProps> = ({ redirects }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    import("../utils").then(({ hideCard }) => hideCard());
  }, []);

  const redirectLink = (dir: string) => {
    switch (dir) {
      case "%40linkedin":
        return "https://linkedin.com";
      case "%40github":
        return "https://github.com";
      case "%40twitter":
        return "https://twitter.com";
      case "%40x":
        return "https://x.com";
      case "%40medium":
        return "https://medium.com";
      case "%40dev":
        return "https://dev.to";
      case "%40portfolio":
        return "https://portfolio.com";
      case "%40instagram":
        return "https://instagram.com";
      case "%40facebook":
        return "https://facebook.com";
      case "%40speakerdeck":
        return "https://speakerdeck.com";
      case "%40hackerrank":
        return "https://hackerrank.com";
      case "%40hashnode":
        return "https://hashnode.com";
      default:
        return "NOT_FOUND";
    }
  };

  useEffect(() => {
    if (redirectLink(redirects) !== "NOT_FOUND") {
      setUrl(redirectLink(redirects));
    }
  }, [redirects]);

  if (url) {
    redirect(url);
  }

  return (
    <section id="redirect">
      <div className="bg-white lg:rounded-2xl dark:bg-[#111111] h-[632px]">
        {redirectLink(redirects) !== "NOT_FOUND" ? (
          <div className="text-center">
            <p className="leading-6 dark:text-white text-lg font-semibold text-gray-700 pt-40">
              Redirecting to: &nbsp;
              <Link href={redirectLink(redirects)}>
                {redirectLink(redirects)}
              </Link>
            </p>
            <LoaderSVG />
          </div>
        ) : (
          <div className="text-center h-[40vh] flex flex-col items-center justify-center dark:text-white">
            <div>
              <h1 className="next-error-h1 inline-block mr-[20px] pr-[24px] font-medium align-top leading-[49px] text-2xl dark:border-white border-black border-r-2">
                404
              </h1>
              <div className="inline-block text-left">
                <h2 className="text-base font-normal leading-[49px] m-0">
                  This alias does not exist.
                  <br />
                </h2>
              </div>
              <p className="mt-4">
                Click{" "}
                <Link
                  href="/links"
                  className="text-blue-800 dark:text-blue-500"
                >
                  here
                </Link>{" "}
                to view all my social links.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClientRedirects;
