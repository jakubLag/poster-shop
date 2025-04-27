import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/Navbar";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PosterVote",
  description: "Votes and Posters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <CartProvider>
            <Navbar />
            {children}
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
