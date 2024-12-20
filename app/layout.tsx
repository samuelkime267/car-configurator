import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { fonts } from "@/data/fonts.data";
import Loader from "@/components/Loader";

export const metadata: Metadata = {
  title: "Car configurator",
  description: "configure cars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fonts} antialiased`}>
        <Loader />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
