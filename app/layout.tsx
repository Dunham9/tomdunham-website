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
    icon: "/branding/td-logo.png",
    shortcut: "/branding/td-logo.png",
    apple: "/branding/td-logo.png",
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
        url: "/branding/td-logo.png",
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
    images: ["/branding/tom-dunham-logo.png"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://tomdunham.com/#person",
  name: "Tom Dunham",
  url: "https://tomdunham.com",
  image: "https://tomdunham.com/headshot.jpg",
  jobTitle: [
    "Writer",
    "Director",
    "Development Producer",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Ephor Pictures",
    url: "https://www.ephorpictures.com",
  },
  sameAs: [
    "https://www.imdb.com/name/YOUR_IMDB_ID/",
    "https://www.instagram.com/YOUR_INSTAGRAM/",
  ],
  knowsAbout: [
    "Screenwriting",
    "Film directing",
    "Film development",
    "Television development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable}`}>
      <body>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}