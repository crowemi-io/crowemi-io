import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { GoogleAnalytics } from '@next/third-parties/google'

import Menu, { LinkItem } from "./ui/Menu"
import Header from "./ui/Header"
import Footer from "./ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "crowemi-io"
};

const menuItems: LinkItem[] = [
  { id: 1, name: "home", route: "/" },
  { id: 2, name: "services", route: "/services" },
  { id: 3, name: "pricing", route: "/pricing" },
//  { id: 4, name: "contact", route: "/contact" }
]

interface Props {
  children?: ReactNode
}

export default function RootLayout({ children }: Props) {
  
  return (
    <html lang="en">
      <body>
        <div className="sticky top-0">
          <Header />
          <Menu linkItems={menuItems} />
        </div>
        {children}
        <Footer LinkItems={menuItems} />
      </body>
      <GoogleAnalytics gaId="G-VQB6V69ZJG" />
    </html>
  );
}
