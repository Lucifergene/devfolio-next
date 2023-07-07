"use client";
import React, { useEffect } from "react";
import {
  DEV_URL,
  FACEBOOK_URL,
  GITHUB_URL,
  HACKERRANK_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  MEDIUM_URL,
  PORTFOLIO_URL,
  SPEAKERDECK_URL,
  TWITTER_URL,
} from "../../const";
import { hideCard } from "../utils";

import "./Links.css";

const Links: React.FC = () => {
  useEffect(() => {
    hideCard("links");
  }, []);
  return (
    <>
      <section id="links">
        <div className="bg-white lg:rounded-2xl dark:bg-[#111111]">
          <div className="container sm:px-5 md:px-10 lg:px-14">
            <div className="pt-12 px-4 md:px-0">
              <h2 className="after-effect after:left-64">Social Links</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]"></div>
            </div>
          </div>

          <div className="pb-12 overflow-hidden lg:px-8">
            <div className="px-8 pb-4 text-center">
              <p className="text-lg text-gray-500 dark:text-[#A6A6A6]">
                Feel free to connect with me on any of these platforms.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-4 ">
              <div className="items-center space-x-2">
                <div className="links links_first font-semibold text-center">
                  <a
                    className="links links_first"
                    href={PORTFOLIO_URL}
                    target="_blank"
                  >
                    Portfolio
                  </a>
                </div>
              </div>

              <div className="items-center space-x-2">
                <div className="links links_second font-semibold text-center">
                  <a
                    className="links links_second"
                    href={GITHUB_URL}
                    target="_blank"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              <div className="items-center space-x-2">
                <div className="links links_third font-semibold text-center">
                  <a
                    className="links links_third"
                    href={LINKEDIN_URL}
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="items-center space-x-2">
                <div className="links links_fourth font-semibold text-center">
                  <a
                    className="links links_fourth"
                    href={TWITTER_URL}
                    target="_blank"
                  >
                    Twitter
                  </a>
                </div>
              </div>

              <div className="items-center space-x-2">
                <div className="links links_fifth font-semibold text-center">
                  <a
                    className="links links_fifth"
                    href={MEDIUM_URL}
                    target="_blank"
                  >
                    Medium
                  </a>
                </div>
              </div>

              <div className="items-center space-x-2">
                <div className="links links_first font-semibold text-center">
                  <a
                    className="links links_first"
                    href={DEV_URL}
                    target="_blank"
                  >
                    Dev.to
                  </a>
                </div>
              </div>

              <div className="items-center space-x-2">
                <div className="links links_second font-semibold text-center">
                  <a
                    className="links links_second"
                    href={SPEAKERDECK_URL}
                    target="_blank"
                  >
                    Speaker Deck
                  </a>
                </div>
              </div>

              <div className="items-center space-x-2">
                <div className="links links_third font-semibold text-center">
                  <a
                    className="links links_third"
                    href={HACKERRANK_URL}
                    target="_blank"
                  >
                    Hackerrank
                  </a>
                </div>
              </div>

              <div className="items-center space-x-2">
                <div className="links links_fourth font-semibold text-center">
                  <a
                    className="links links_fourth"
                    href={INSTAGRAM_URL}
                    target="_blank"
                  >
                    Instagram
                  </a>
                </div>
              </div>

              <div className="items-center space-x-2">
                <div className="links links_fifth font-semibold text-center">
                  <a
                    className="links links_fifth"
                    href={FACEBOOK_URL}
                    target="_blank"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Links;
