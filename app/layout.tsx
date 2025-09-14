import type { Metadata } from "next";
import "./globals.css"; // Correct path from the root

export const metadata: Metadata = {
  title: "EDUNAV",
  description: "Your Personalized Path to a Brighter Future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
