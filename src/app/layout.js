'use client'
import localFont from "next/font/local";
import "./globals.css";

import AppContext from "../components/AppContextFolder/AppContext";
import { useRef, useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const [sharedState, setSharedState] = useState({
    portfolio: {
      NavBar: {
        IntervalEvent: null,
        scrolling: null,
        scrollSizeY: null,
      },
    },
    finishedLoading: false,
  });

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppContext.Provider value={{ sharedState, setSharedState }}>
          {children}
        </AppContext.Provider>
      </body>
    </html>
  );
}
