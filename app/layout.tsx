import type { Metadata } from "next";
import {
  League_Spartan,
  Plus_Jakarta_Sans,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Buhle's Vision",
    template: "%s | Buhle's Vision",
  },
  description:
    "High-end digital editorial and marketing platform rebuilt from source design exports.",
  metadataBase: new URL("https://buhles-vision.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body
        className={`${plusJakartaSans.variable} ${playfairDisplay.variable} ${leagueSpartan.variable} min-h-screen bg-background-dark font-sans text-stone-100 antialiased selection:bg-primary selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
