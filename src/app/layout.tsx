import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Medical Tourism to Turkey - EuroHealth Medical Tourism AŞ",
  description: "Professional medical tourism platform for Turkey by EuroHealth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
