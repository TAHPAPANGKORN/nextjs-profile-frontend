import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Papangkorn | Profile",
  description: "Personal portfolio showcasing projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="vsc-initialized">
        {children}
      </body>
    </html>
  );
}
