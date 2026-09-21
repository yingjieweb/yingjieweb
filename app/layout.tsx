import type { Metadata } from "next";
// components
import NavBar from "./_layout/nav-bar";
// styles
import "./globals.css";

export const metadata: Metadata = {
  title: "Yingjieweb | Personal Website",
  description:
    "Personal website of Yingjieweb, a full-stack developer exploring AI agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
