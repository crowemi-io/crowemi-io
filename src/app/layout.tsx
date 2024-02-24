import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

import Menu, { LinkItem } from "../components/Menu"
import Header from "../components/Header"
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "crowemi-io"
};

const menuItems: LinkItem[] = [
  { name: "home", route: "/" },
  { name: "services", route: "/services" },
  { name: "pricing", route: "/pricing" },
  { name: "contact", route: "/contact" }
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
    </html>
  );
}
