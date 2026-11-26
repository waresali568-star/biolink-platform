
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BioLink Platform",
  description: "Create and manage beautiful bio link pages."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
