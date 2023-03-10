import "../styles/globals.css";
import Card from "./components/Card";
import { Navbar } from "./components/Navbar";
import { NavbarMobile } from "./components/NavbarMobile";

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
      </head>
      <body>
        <div className="bg-homeBg dark:bg-homeTwoBg-dark min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
          <div className="section-bg">
            <div className="w-full flex justify-between px-4">
              {/* <!-- website Logo --> */}
              <div className="flex items-center">
              <img
                className="h-[4rem] lg:h-[6rem]"
                src="/assets/images/logo/logo-2.png"
                alt="logo"
              />
              </div>

              <div className="flex items-center">
                {/* <!-- dark and light mode toggle --> */}
                <button
                  id="theme-toggle"
                  type="button"
                  className="dark-light-btn"
                >
                  <i
                    id="theme-toggle-dark-icon"
                    className="fa-solid text-xl fa-moon hidden"
                  ></i>
                  <i
                    id="theme-toggle-light-icon"
                    className="fa-solid fa-sun text-xl hidden"
                  ></i>
                </button>
                {/* <!-- mobile toggle button --> */}
                <button
                  id="menu-toggle"
                  type="button"
                  className="menu-toggle-btn"
                >
                  <i
                    id="menu-toggle-open-icon"
                    className="fa-solid fa-bars text-xl"
                  ></i>
                  <i
                    id="menu-toggle-close-icon"
                    className="fa-solid fa-xmark text-xl hidden"
                  ></i>
                </button>
              </div>
            </div>
          </div>

          <NavbarMobile />

          <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
            <Card />

            <div className="col-span-12 lg:col-span-8 lg:top-46 relative top-64 ">
              <Navbar />

              {children}
            </div>
          </div>
        </div>

        <script src="/assets/js/vendor/jquary.min.js"></script>
        <script src="/assets/js/vendor/slick.js"></script>
        {/* <!-- main js --> */}
        <script src="/assets/js/main.js"></script>
      </body>
    </html>
  );
}
