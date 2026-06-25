import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Keita Lee — Product, UX & Software",
  description:
    "Portfolio of Keita Lee — product thinking, UX design, and software engineering.",
  openGraph: {
    title: "Keita Lee — Product, UX & Software",
    description:
      "Portfolio of Keita Lee — product thinking, UX design, and software engineering.",
    url: "https://keita-lee.com",
    siteName: "Keita Lee",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
