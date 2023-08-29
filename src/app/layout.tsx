import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Menu from "@/components/Menu/Menu";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Storyteller",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden lg:overflow-hidden`}>
        <Header />
        <Menu>
          {children}
        </Menu>
      </body>
    </html>
  );
}
