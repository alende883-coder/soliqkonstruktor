import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soliq Konstruktor | IN PLUS",
  description:
    "IN PLUS buxgalteriya, soliq, 1C va biznes amaliyoti bo'yicha kurslar katalogi.",
  metadataBase: new URL("https://soliqkonstruktor.uz"),
  icons: {
    icon: "/logoIcon.png",
    shortcut: "/logoIcon.png",
    apple: "/logoIcon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
