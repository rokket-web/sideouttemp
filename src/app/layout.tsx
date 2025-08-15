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
  icons: {
    icon: '/cropped-sideoutfavicon-32x32.png',
    shortcut: '/cropped-sideoutfavicon-32x32.png',
    apple: '/cropped-sideoutfavicon-32x32.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/cropped-sideoutfavicon-32x32.png" />
        <link rel="shortcut icon" href="/cropped-sideoutfavicon-32x32.png" />
        <link rel="apple-touch-icon" href="/cropped-sideoutfavicon-32x32.png" />
      </head>
      <body className={`${kronaOne.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
