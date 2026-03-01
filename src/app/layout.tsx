import type { Metadata } from "next";
import { Montserrat, Antic_Didone } from "next/font/google";
import "./globals.css";
import 'bootstrap-icons/font/bootstrap-icons.css'

import { CartProvider } from "@/src/context/cardContext"; // 

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: "normal",
  subsets: ['latin'],
})

const anticdidone = Antic_Didone ({
  weight: '400',
  subsets: ['latin'],
  style: "normal",
  variable: '--font-anticdidone'
})

export const metadata: Metadata = {
  title: "Clair Acessórios",
  description: "Uma loja de joias elegantes em prata 925 e ouro 18k!",
  icons: {
    icon: "/imagens/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${montserrat.className} ${anticdidone.variable} antialiased`} >
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
