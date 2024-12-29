// app/layout.tsx (or your layout file)
"use client"; // This marks the file as a client component

import { SessionProvider } from "next-auth/react"; // Import SessionProvider
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar/Navbar";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${roboto.className} bg-white`}>
        <SessionProvider>
          <div className="min-h-screen">
            <div className="border shadow-lg mb-10">
              <Navbar />
            </div>
            <div className="container mx-auto">{children}</div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
