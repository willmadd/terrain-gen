import './globals.css'
import { Inter } from 'next/font/google'
import ReactGA from "react-ga4";

ReactGA.initialize("G-E95X19XD5G");
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Terrain Gen | Free Low Poly Terrain Generation and Downloading',
  description: 'Terrain Gen is a free app that allows you to create, customise and download beautiful low poly terrain. It\s completely free to use and you can save your creations for future use.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
