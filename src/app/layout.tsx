import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClinetProvider from "./context/ClientProvider";
import "./globals.css";
import { SnackbarProvider } from "./context/SnackBarContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Google meet clone",
  description: "A video calling app built with Next.js & Stream",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ClinetProvider>
            <SnackbarProvider>
              <Navbar />
              <main className="mx-auto max-w-5xl px-3 py-6">{children}</main>
            </SnackbarProvider>
          </ClinetProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
