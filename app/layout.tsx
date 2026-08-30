import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sameer Jadoon | B2B Lead Generation & Cold Email Specialist",
  description:
    "Sameer Jadoon helps B2B companies generate qualified leads through targeted prospect research, B2B lead generation and cold email outreach.",
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
