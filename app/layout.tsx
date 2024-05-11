import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const grotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Tublian Dashboard",
  description: "Tublian real-time dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={grotesk.className}>
        {children}
      </body>
    </html>
  );
}
