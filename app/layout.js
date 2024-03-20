import Nav from "@/components/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CAAIR - Centre for Alumni Affairs & International Relations",
  description:
    "National Institute of Technology, Centre for Alumni Affairs & International Relations, Durgapur Alumni Portal, Durgapur Alumni Network, Durgapur Alumni Association, National Institute of Technology Durgapur Branch, National Institute of Technology Durgapur,  NIT Durgapur, Regional Engineering College Durgapur, REC Durgapur, RECD, CAAIR, REC/NIT Durgapur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
