import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rudy Hartwig",
  description: "Portfolio and About Me for Rudy Hartwig.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-50 text-zinc-900">{children}</body>
    </html>
  );
}
