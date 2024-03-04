import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

import Menu, { LinkItem } from "./lib/Menu"
import Header from "./lib/Header"
import Footer from "./lib/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "crowemi-io"
};

const menuItems: LinkItem[] = [
  { id: 1, name: "home", route: "/" },
  { id: 2, name: "services", route: "/services" },
  { id: 3, name: "pricing", route: "/pricing" },
  { id: 4, name: "contact", route: "/contact" }
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
