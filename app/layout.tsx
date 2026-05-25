import type { Metadata } from "next";
import { Cormorant_Garamond, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Acharii",
  description: "A refined achaar brand bringing handcrafted Pakistani pickles to the table with a premium, yet authentic feel. Homemade with heart, spiced with soul.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${manrope.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen flex flex-col items-center">
          <Header />
          <div className="flex-grow w-full flex flex-col">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
