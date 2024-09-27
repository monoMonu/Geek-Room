import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import "../styles/globals.css";
import { Metadata } from "next";
import ColorSchemeProvider from "./ColorSchemeProvider";

export const metadata: Metadata = {
  title: "Geek Room",
  description: "Welcome to GeekRoom",
  icons: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      url: '/GR_Logo.svg',
    },
    {
      rel: 'apple-touch-icon',
      url: '/GR_Logo.svg',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/GR_Logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/GR_Logo.svg" />
      </head>
      <body>
        <ColorSchemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ColorSchemeProvider>
      </body>
    </html>
  );
}