import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hrithikuday.dev"),
  title: "Hrithik Uday | Full Stack Developer",
  description: "Portfolio of Hrithik Uday, a passionate Full Stack Developer based in Malappuram, India. Specializing in building scalable web applications, modern mobile apps, backend systems, and automation tools.",
  keywords: [
    "Hrithik Uday",
    "Full Stack Developer",
    "Web Developer",
    "App Developer",
    "Software Engineer",
    "Portfolio",
    "Malappuram",
    "India",
    "Next.js Developer",
    "React",
    "Node.js",
    "Python",
    "Django",
    "Framer Motion"
  ],
  authors: [{ name: "Hrithik Uday" }],
  creator: "Hrithik Uday",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hrithikuday.dev",
    title: "Hrithik Uday | Full Stack Developer",
    description: "Building scalable web applications, modern mobile apps, automation tools, and digital experiences.",
    siteName: "Hrithik Uday Portfolio",
    images: [
      {
        url: "/profil.png",
        width: 800,
        height: 800,
        alt: "Hrithik Uday - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hrithik Uday | Full Stack Developer",
    description: "Building scalable web applications, modern mobile apps, automation tools, and digital experiences.",
    images: ["/profil.png"],
    creator: "@HrithikUday",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="bg-white text-black min-h-screen flex flex-col font-sans antialiased selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
