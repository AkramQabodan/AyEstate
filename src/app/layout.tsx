import type { Metadata } from "next";
import { Sora, Playball, Roboto, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
});

const playball = Playball({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-playball",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "AyEstate - Find Your Dream Home",
  description:
    "Discover your dream property with AyEstate. Professional real estate services for buying, selling, and investment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={`en`}
      className={`${sora.variable} ${playball.variable} ${roboto.variable} ${plusJakartaSans.variable}`}
    >
      <body className="w-full min-h-screen font-sora overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
