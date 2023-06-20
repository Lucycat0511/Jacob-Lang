import DarkModeSwitch from "@/app/components/DarkModeSwitch";
import "./globals.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Script from "next/script";

export const metadata = {
  title: "Jacob Lang",
  description: "Jacob Lang's Art Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        src="https://kit.fontawesome.com/e2667abf31.js"
        crossorigin="anonymous"
      />
      <body className="flex flex-col dark:bg-primary dark:text-white bg-white gap-4 px-24">
        <DarkModeSwitch />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
