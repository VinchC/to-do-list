import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const garamond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "My To-do-list(s)",
  description: "A website allowing to create as many to-do-lists as you wish",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={garamond.variable}>
        <Toaster />
        <main>{children}</main>
      </body>
    </html>
  );
}
