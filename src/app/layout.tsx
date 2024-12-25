import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar/Navbar";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MicroDeft React Test",
  description: "Frontend Internship program",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={roboto.className}>
        <div className="container mx-auto  min-h-screen">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
