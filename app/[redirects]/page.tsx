"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  DEV_URL,
  FACEBOOK_URL,
  GITHUB_URL,
  HACKERRANK_URL,
  HASHNODE_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  MEDIUM_URL,
  PORTFOLIO_URL,
  SPEAKERDECK_URL,
  TWITTER_URL,
} from "../../const";
import { hideCard } from "../utils";
import LoaderSVG from "./LoaderSVG";

interface ParamProps {
  params: {
    redirects: string;
  };
}

const RedirectsPage = ({ params }: ParamProps) => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    hideCard("redirect");
  }, []);

  const redirectLink = (dir: string) => {
    switch (dir) {
      case "%40linkedin":
        return LINKEDIN_URL;
      case "%40github":
        return GITHUB_URL;
      case "%40twitter":
        return TWITTER_URL;
      case "%40medium":
        return MEDIUM_URL;
      case "%40dev":
        return DEV_URL;
      case "%40portfolio":
        return PORTFOLIO_URL;
      case "%40instagram":
        return INSTAGRAM_URL;
      case "%40facebook":
        return FACEBOOK_URL;
      case "%40speakerdeck":
        return SPEAKERDECK_URL;
      case "%40hackerrank":
        return HACKERRANK_URL;
      case "%40hashnode":
        return HASHNODE_URL;
      default:
        return "NOT_FOUND";
    }
  };

  return (
    <>
      <section id="redirect">
        <div className="bg-white lg:rounded-2xl dark:bg-[#111111] h-[632px]">
          {redirectLink(params.redirects) !== "NOT_FOUND" ? (
            <>
              <div className="text-center">
                <p className="leading-6 dark:text-white text-lg font-semibold text-gray-700 pt-40">
                  Redirecting to: &nbsp;
                  <Link href={redirectLink(params.redirects)}>
                    {redirectLink(params.redirects)}
                  </Link>
                </p>
                <LoaderSVG />
              </div>
              {setUrl(redirectLink(params.redirects))}
            </>
          ) : (
            <>
              {" "}
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
                      href={"/links"}
                      className="text-blue-800 dark:text-blue-500"
                    >
                      here
                    </Link>{" "}
                    to view all my social links.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {url && redirect(url)}
    </>
  );
};
export default RedirectsPage;
