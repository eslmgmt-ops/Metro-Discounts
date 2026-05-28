import type { Metadata } from "next"
import { DM_Sans, Geist_Mono } from "next/font/google"
import { Providers } from "@/components/providers"
import "./globals.css"

const fontSans = DM_Sans({
  variable: "--font-idf-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const fontMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Metro Canabies Discounts · Discount manager",
  description: "Metro Canabies Discounts portal for managing Treez org-level discounts.",
  metadataBase: new URL("https://metro-canabies-discounts.com"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
