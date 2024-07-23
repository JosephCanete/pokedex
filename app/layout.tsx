import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainContainer from "./components/Container/MainContainer";
import { twMerge } from "tailwind-merge";

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
      <body className={twMerge(inter.className, "bg-dark-100")}>
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}
