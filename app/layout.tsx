import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joao Pedro Duarte",
  description:
    "A front-end engineer with a passion for building products that truly impact people's life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-gradient-to-l from-zinc-950 to-zinc-900`}
      >
        {children}
      </body>
    </html>
  );
}
