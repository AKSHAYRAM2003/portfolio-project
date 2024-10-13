import type { Metadata } from "next";
import{cn} from "@/lib/utils"
// import localFont from "next/font/local";
import {Bricolage_Grotesque,Oswald} from "next/font/google";
import "./globals.css";
import GrainEffect from "@/components/visualEffects/grain-effects";

//fonts
const MainFont = Bricolage_Grotesque({subsets:["latin"]});
const OswalFont = Oswald({subsets:["latin"],variable:"--font-oswald"});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Akshay official portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(MainFont.className,OswalFont.variable)}
      >
        <GrainEffect/>
        {children}
      </body>
    </html>
  );
}
