import type { Metadata } from "next";
// components
import NavBar from "./_layout/nav-bar";
// config
import { PERSON_JSON_LD } from "./config/person";
import { SITE_URL } from "./config/site";
// styles
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Yingjieweb | Full-Stack Developer",
    template: "%s | Yingjieweb",
  },
  description:
    "Personal website of Yingjieweb, a full-stack developer building AI agents with Python, Next.js, React, and Vue.",
  applicationName: "Yingjieweb",
  authors: [{ name: "Yingjieweb", url: "/" }],
  creator: "Yingjieweb",
  publisher: "Yingjieweb",
  keywords: [
    "Yingjieweb",
    "full-stack developer",
    "AI agents",
    "Python",
    "Next.js",
    "React",
    "Vue",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Yingjieweb",
    title: "Yingjieweb | Full-Stack Developer",
    description:
      "Full-stack developer building AI agents with Python, Next.js, React, and Vue.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yingjieweb | Full-Stack Developer",
    description:
      "Full-stack developer building AI agents with Python, Next.js, React, and Vue.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(PERSON_JSON_LD).replace(/</g, "\\u003c"),
          }}
        />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
