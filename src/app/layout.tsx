import type { Metadata } from "next";
import { Krona_One } from "next/font/google";
import "./globals.css";

const kronaOne = Krona_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-krona-one",
});

export const metadata: Metadata = {
  title: "Sideout Pickleball",
  description: "Contact Sideout Pickleball - Get in touch with us today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kronaOne.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
