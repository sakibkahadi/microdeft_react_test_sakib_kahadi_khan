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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${roboto.className} bg-white`}>
        <div className="  min-h-screen">
          <div className="border shadow-lg mb-10">
            <Navbar />
          </div>
          <div className="container mx-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
