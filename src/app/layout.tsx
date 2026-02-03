import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/header";


const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: "normal",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Clair Acessórios",
  description: "Uma loja de joias elegantes em prata 925 e ouro 18k!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
