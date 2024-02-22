import type { Metadata } from "next";
import { Navbar } from "@/components";

import './globals.css'
import  SessionProvider from "../utils/sessionProvider";
import { getServerSession } from "next-auth";
import StoreHelper from "@/utils/storeHelper";
import { useStore } from "zustand";
import Navigation from "@/components/Navbar/Navigation";

export const metadata: Metadata = {
  title: "EBMShop Next App",
  description: "EBM shop application with NextJS",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)



{
  const session = await getServerSession()
  return (
    <html lang="en">
      <body >
        <SessionProvider session={session}>
        <Navigation/>
        {children}
        </SessionProvider>
      </body>
    </html>
  );
}
