import Script from "next/script";
import { Metadata, Viewport } from "next/types";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Poppins, Roboto_Slab, Source_Sans_3 } from "next/font/google";
import Card from "./components/Card";
import { DarkModeToggle } from "./components/DarkModeToggle";
import { Navbar } from "./components/Navbar";
import { NavbarMobile } from "./components/NavbarMobile";
import { NavMobileToggle } from "./components/NavMobileToggle";

// Import CSS files directly
import "../public/assets/css/tailwind.css";
import "../public/assets/css/custom.css";
import "../styles/globals.css";

// Font configuration
const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const robotoSlab = Roboto_Slab({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-slab",
});

const sourceSans3 = Source_Sans_3({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans-3",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0065E2" },
    { media: "(prefers-color-scheme: dark)", color: "#45505B" },
  ],
};

export const metadata: Metadata = {
  title: "Avik Kundu | DevFolio",
  description:
    "Hey 👋, I'm Avik,  Software Engineer specializing in Full-stack development, Kubernetes and open-source technologies.",
  applicationName: "Avik's Portfolio Site",
  authors: {
    name: "Avik Kundu",
    url: "https://www.avikkundu.com/",
  },
  creator: "Avik Kundu",
  publisher: "Vercel",
  generator: "Next.js",
  keywords: [
    "Avik Kundu",
    "portfolio",
    "software engineer",
    "Redhat",
    "Nextjs",
    "Tailwind",
    "developer",
    "Kubernetes",
    "opensource",
    "full stack",
    "ReactJS",
  ],
  referrer: "origin",
  openGraph: {
    type: "website",
    title: "Avik Kundu | DevFolio",
    description:
      "Hey 👋, I'm Avik,  Software Engineer specializing in Full-stack development, Kubernetes and open-source technologies. Explore my portfolio and reach out to me for any discussion.",
    siteName: "Avik's Portfolio Site",
    images: ["https://i.imgur.com/xUqk6VJ.png"],
    url: "https://www.avikkundu.com/",
  },
  icons: [
    {
      url: "/favicon.ico",
      type: "image/x-icon",
    },
  ],
  twitter: {
    card: "summary_large_image",
    title: "Avik Kundu | DevFolio",
    creator: "@avik6028",
    site: "@avik6028",
    description:
      "Hey 👋, I'm Avik,  Software Engineer specializing in Full-stack development, Kubernetes and open-source technologies. Explore my portfolio and reach out to me for any discussion.",
    images: ["https://i.imgur.com/xUqk6VJ.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${robotoSlab.variable} ${sourceSans3.variable}`}
    >
      <head>
        <meta charSet="UTF-8" />

        {/* FontAwesome - Use Script components for better Next.js compatibility */}
        <Script
          src="/assets/fontaswesome/css/all.min.css"
          strategy="beforeInteractive"
          id="fa-all"
        />
        <Script
          src="/assets/fontaswesome/css/fontawesome.min.css"
          strategy="beforeInteractive"
          id="fa-core"
        />
        <Script
          src="/assets/fontaswesome/js/all.min.js"
          crossOrigin="anonymous"
          defer
          strategy="afterInteractive"
          id="fa-js"
        />

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
        <div className="bg-homeBg dark:bg-homeTwoBg-dark min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full font-poppins">
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

            <div className="col-span-12 lg:col-span-8 lg:top-46 relative lg:w-[88%]">
              <Navbar />
              {children}
              <Analytics />
              <SpeedInsights />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
