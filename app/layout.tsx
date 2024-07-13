import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainContainer from "./components/Container/MainContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokedex",
  description: "Developed by Mon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {<MainContainer>{children}</MainContainer>}
      </body>
    </html>
  );
}
