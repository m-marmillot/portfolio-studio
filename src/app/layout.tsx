import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marc — UX & AI Portfolio",
  description: "Selected UX and AI work by Marc.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
