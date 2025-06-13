// Next.js and Vercel specific imports
import Script from 'next/script';
import { Metadata, Viewport } from 'next/types';
import { Geist, Poppins, Source_Sans_3, Montserrat } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

// Component imports
import Card from './components/Card';
import { DarkModeToggle } from './components/DarkModeToggle';
import { Navbar } from './components/Navbar';
import { NavbarMobile } from './components/NavbarMobile';
import { NavMobileToggle } from './components/NavMobileToggle';

// CSS imports
import '../public/assets/css/tailwind.css';
import '../public/assets/css/custom.css';
import '../styles/globals.css';

// Font configuration

const geist = Geist({
  weight: ['200', '300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist',
});

const montserrat = Montserrat({
  weight: ['200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

const sourceSans3 = Source_Sans_3({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-sans-3',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#EDEDED' },
    { media: '(prefers-color-scheme: dark)', color: '#232834' },
  ],
};

export const metadata: Metadata = {
  title: 'Avik Kundu | DevFolio',
  description:
    "Hey 👋, I'm Avik,  Software Engineer specializing in Full-stack development, Kubernetes and Generative AI.",
  applicationName: "Avik's Portfolio Site",
  authors: {
    name: 'Avik Kundu',
    url: 'https://www.avikkundu.com/',
  },
  creator: 'Avik Kundu',
  publisher: 'Vercel',
  generator: 'Next.js',
  keywords: [
    'Avik Kundu',
    'portfolio',
    'software engineer',
    'Redhat',
    'Nextjs',
    'Tailwind',
    'developer',
    'Kubernetes',
    'opensource',
    'full stack',
    'ReactJS',
    'Generative AI',
  ],
  referrer: 'origin',
  openGraph: {
    type: 'website',
    title: 'Avik Kundu | DevFolio',
    description:
      "Hey 👋, I'm Avik,  Software Engineer specializing in Full-stack development, Kubernetes and Generative AI. Explore my portfolio and reach out to me for any discussion.",
    siteName: "Avik's Portfolio Site",
    images: [
      'https://i.ibb.co/bMFz6Jjf/i-Screen-Shoter-Google-Chrome-250613131026-1.png',
    ],
    url: 'https://www.avikkundu.com/',
  },
  icons: [
    {
      url: '/favicon.ico',
      type: 'image/x-icon',
    },
  ],
  twitter: {
    card: 'summary_large_image',
    title: 'Avik Kundu | DevFolio',
    creator: '@avik6028',
    site: '@avik6028',
    description:
      "Hey 👋, I'm Avik,  Software Engineer specializing in Full-stack development, Kubernetes and Generative AI. Explore my portfolio and reach out to me for any discussion.",
    images: [
      'https://i.ibb.co/bMFz6Jjf/i-Screen-Shoter-Google-Chrome-250613131026-1.png',
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${montserrat.variable} ${poppins.variable} ${sourceSans3.variable} ${geist.variable}`}
    >
      <head>
        <meta charSet='UTF-8' />

        {/* Immediately-invoked function to set theme before page load to prevent FOUC */}
        <Script id='theme-setter' strategy='beforeInteractive'>
          {`
            (function() {
              try {
                var LStheme = localStorage.getItem('theme');
                if (LStheme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else if (LStheme === 'light') {
                  // Explicitly remove if light, helps if class was somehow stuck
                  document.documentElement.classList.remove('dark');
                } else { // No theme in localStorage, check prefers-color-scheme
                  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                }
              } catch (e) {
                // Silently fail on error to prevent breaking page load
                // console.error('Error setting initial theme:', e);
              }
            })();
          `}
        </Script>

        {/* FontAwesome - Use Script components for better Next.js compatibility */}
        <Script
          src='/assets/fontaswesome/css/all.min.css'
          strategy='beforeInteractive'
          id='fa-all'
        />
        <Script
          src='/assets/fontaswesome/css/fontawesome.min.css'
          strategy='beforeInteractive'
          id='fa-core'
        />
        <Script
          src='/assets/fontaswesome/js/all.min.js'
          crossOrigin='anonymous'
          defer
          strategy='afterInteractive'
          id='fa-js'
        />

        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-RN06F8M1G9'
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-RN06F8M1G9');
        `}
        </Script>
      </head>
      <body>
        <div className='bg-homeBg dark:bg-homeTwoBg-dark min-h-screen w-full bg-cover bg-fixed bg-center bg-no-repeat font-geist md:pb-16'>
          <div className='section-bg'>
            <div className='flex w-full justify-between px-4'>
              {/* website Logo */}
              <div className='flex items-center'>
                <div className='bg-sigLogo dark:bg-sigLogo-dark h-[4rem] rounded-lg lg:w-[30rem]'></div>
                <div className='bg-sigLogo-mobile dark:bg-sigLogo-mobile-dark ml-6 h-[4rem] w-[5rem] rounded-lg md:hidden'></div>
              </div>

              <div className='flex items-center'>
                {/* dark and light mode toggle */}
                <DarkModeToggle />
                {/* mobile toggle button */}
                <NavMobileToggle />
              </div>
            </div>
          </div>

          <NavbarMobile />

          <div className='container grid grid-cols-12 justify-between md:gap-10 lg:mt-[220px]'>
            <Card />

            <div className='lg:top-46 relative col-span-12 lg:col-span-8'>
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
