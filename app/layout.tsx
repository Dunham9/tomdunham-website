import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tomdunham.com"),

  title: {
    default: "Tom Dunham | Writer & Director",
    template: "%s | Tom Dunham",
  },

  description:
    "Official website of Tom Dunham, writer, director and development producer working across film and television.",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "branding/td-logo.png",
    shortcut: "branding/td-logo.png",
    apple: "branding/td-logo.png",
  },

  openGraph: {
    title: "Tom Dunham | Writer & Director",
    description:
      "Writer, director and development producer working across film and television.",
    url: "https://tomdunham.com",
    siteName: "Tom Dunham",
    type: "website",
    images: [
      {
        url: "/branding/Tom Dunham Logo_Brackets_Black.png",
        width: 1200,
        height: 630,
        alt: "Tom Dunham",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tom Dunham | Writer & Director",
    description:
      "Writer, director and development producer working across film and television.",
    images: ["/branding/Tom Dunham Logo_Brackets_Black.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable}`}>
      <body>{children}</body>
    </html>
  );
}