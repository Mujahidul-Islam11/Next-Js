import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export const metadata = {
  title: {
    default: "Next Hero",
    template: "%s | Next Hero"
  },
  description: "Welcome to be a Next Hero",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased h-screen`}
      >
        <Navbar></Navbar>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
