import type { Metadata } from "next";
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Gym Rat",
  description: "A web app for gym rats",
  icons: {
    icon: "./favicon.ico",
  },
};

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" />
        <link rel="stylesheet" href="https://www.nerdfonts.com/assets/css/webfont.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <header className="sticky top-0 z-50">
          <Navigation />
        </header>
        <div className="container">
          <main>{children}</main>
          <footer className=""><Footer /></footer>
        </div>
      </body>
    </html>
  );
}
