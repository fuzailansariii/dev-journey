import type { Metadata } from "next";
import { Nunito, Poppins, Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ToasterProvider from "@/providers/ToastProvider";
import { AuthProvider } from "./providers/AuthProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
});
export const metadata: Metadata = {
  title: "<DevJourney />",
  description: "Developed by Fuzail Ansari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${nunito.variable} ${quicksand.variable}`}
      >
        <AuthProvider>
          <Navbar />
          {children}
          <ToasterProvider />
        </AuthProvider>
      </body>
    </html>
  );
}
