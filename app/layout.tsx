import "../styles/globals.css";
import Script from "next/script";
import Card from "./components/Card";
import { DarkModeToggle } from "./components/DarkModeToggle";
import { Navbar } from "./components/Navbar";
import { NavbarMobile } from "./components/NavbarMobile";
import { NavMobileToggle } from "./components/NavMobileToggle";

export const metadata = {
  title: "Devfolio | Avik Kundu",
  description: "Software Engineer Portfolio",
  keywords: ["avik kundu", "portfolio", "software engineer", "redhat"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        <meta name="msapplication-TileColor" content="#0563BB" />
        <meta name="theme-color" content="#45505B" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* <!--=== fontaswesome ===--> */}
        <link rel="stylesheet" href="/assets/fontaswesome/css/all.min.css" />
        <link
          rel="stylesheet"
          href="/assets/fontaswesome/css/fontawesome.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600&amp;family=Roboto+Slab:wght@300;400;500;600;700&amp;display=swap"
          rel="stylesheet"
        />

        {/* <!--=== main css ===--> */}
        <link rel="stylesheet" href="/assets/css/tailwind.css" />
        <link rel="stylesheet" href="/assets/css/custom.css" />

        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RN06F8M1G9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-RN06F8M1G9');
        `}
        </Script>
      </head>
      <body>
        <div className="bg-homeBg dark:bg-homeTwoBg-dark min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
          <div className="section-bg">
            <div className="w-full flex justify-between px-4">
              {/* <!-- website Logo --> */}
              <div className="flex items-center">
                <div className="bg-sigLogo dark:bg-sigLogo-dark h-[4rem] lg:h-[6rem] w-48 lg:w-72"></div>
              </div>

              <div className="flex items-center">
                {/* <!-- dark and light mode toggle --> */}
                <DarkModeToggle />
                {/* <!-- mobile toggle button --> */}
                <NavMobileToggle />
              </div>
            </div>
          </div>

          <NavbarMobile />

          <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
            <Card />

            <div className="col-span-12 lg:col-span-8 lg:top-46 relative">
              <Navbar />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
