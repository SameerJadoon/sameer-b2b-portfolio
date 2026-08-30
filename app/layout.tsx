import "./globals.css";

export const metadata = {
  title: "Sameer Jadoon | B2B Lead Generation & Cold Email Specialist",
  description:
    "Portfolio of Sameer Jadoon — B2B lead generation, cold email, prospect research and outbound support for B2B agencies and SaaS companies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
