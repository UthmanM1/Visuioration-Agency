import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Visuioration — Marketing, Contracted to Outcomes",
  description:
    "Performance marketing for construction, civil engineering and property businesses, with lead volume and cost-per-lead targets contracted before spend begins.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
