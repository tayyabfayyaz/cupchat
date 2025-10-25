import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Roboto_Mono } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"

// Components
import Header from "./components/header"
import Footer from "./components/footer"
import ChatbotClient from "./components/chatbot"

// Font configurations
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "CupChat AI",
  description:
    "A production-ready AI agent API with Gemini integration that enables seamless conversational AI experiences. Features include real-time chat, conversation memory, rate limiting, and secure API key management. Built with FastAPI and designed for scalability.",
  icons: {
    icon: "/bot.ico",
  },
}

export const generateViewport = (): Viewport => ({
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="min-h-screen antialiased">
        <ClerkProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <ChatbotClient />
              {children}
            </main>
            <Footer />
          </div>
        </ClerkProvider>
      </body>
    </html>
  )
}
