import { Poppins } from "next/font/google";
import { BackToTop } from "@/components/back-to-top";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Loader } from "@/components/loader";
import { ScrollProgressBar } from "@/components/scroll-progress-bar";
import { siteConfig } from "@/lib/site-data";
import { ThemeProvider, themeInitScript } from "@/lib/theme-provider";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title} Portfolio`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Vineet R J", "Frontend Developer", "React Developer", "Next.js Developer", "Web Developer Portfolio", "JavaScript", "Redux", "Tailwind CSS"],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: `${siteConfig.name} — Portfolio`,
    title: `${siteConfig.name} — ${siteConfig.title} Portfolio`,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [{ url: "/assets/icons/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title} Portfolio`,
    description: siteConfig.description,
    images: ["/assets/icons/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/icons/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/assets/icons/apple-touch-icon.png",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#2563eb",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}/assets/images/about/profile.jpg`,
  jobTitle: siteConfig.title,
  email: `mailto:${siteConfig.email}`,
  knowsAbout: ["JavaScript", "React.js", "Next.js", "Redux", "Tailwind CSS", "Java", "SQL"],
  sameAs: Object.values(siteConfig.social),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${siteConfig.name} — Portfolio`,
  url: siteConfig.url,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.variable}>
      <head>
        {/* Theme init — the one deliberate inline script in this project. It must run
            before first paint to set the `dark` class and avoid a flash of the wrong
            theme; deferring it would cause a visible flash, so it stays inline by design. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[9999] -translate-y-24 rounded-lg bg-primary px-5 py-3 font-semibold text-white transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>

        <ThemeProvider>
          <Loader />
          <ScrollProgressBar />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
