import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soliq Konstruktor | IN PLUS",
  description:
    "IN PLUS buxgalteriya, soliq va 1C amaliyoti bo'yicha 3 oylik kurs.",
  metadataBase: new URL("https://soliqkonstruktor.uz"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="h-full scroll-smooth">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
