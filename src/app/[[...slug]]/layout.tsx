import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Suspense } from "react";
import Loading from "./loading";

/*const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});*/

export const metadata: Metadata = {
  title: "Order Book",
  description: "Generated by create next app",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}

export default RootLayout