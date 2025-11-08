import type { Metadata } from "next"
import { Inter, Noto_Sans_SC } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans-sc",
})

export const metadata: Metadata = {
  title: "Chinese Worksheet Generator",
  description: "Generate customizable Chinese character practice worksheets with stroke order visualization, pinyin, and definitions",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${notoSansSC.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
