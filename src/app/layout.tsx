import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;


export const metadata: Metadata = {
  title: "Papangkorn | Profile",
  description: "Personal portfolio showcasing projects and skills",
  keywords: ['papangkorn', 'pitjawong', 'papangkorn pitjawong', 'portfolio', 'profile', 'web developer', 'software engineer'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}>
          </Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body className="vsc-initialized">{children}</body>
    </html>
  );
}
