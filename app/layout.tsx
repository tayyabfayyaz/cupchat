import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { ClerkProvider } from "@clerk/nextjs";
import ChatbotClient from "./components/chatbot";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CupChat AI",
  description: "A production-ready AI agent API with Gemini integration that enables seamless conversational AI experiences. Features include real-time chat, conversation memory, rate limiting, and secure API key management. Built with FastAPI and designed for scalability.",
  icons: {
    icon: "/bot.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Header />
          <ChatbotClient />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
