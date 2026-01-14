// app/layout.js
import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: "Hanga Kovács – Portfolio",
  description: "UI/UX Designer Portfolio",
  icons: {
    icon: "../images/icon.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}  {/* This is where all pages render */}
      </body>
    </html>
  )
}
