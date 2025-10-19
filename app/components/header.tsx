"use client"; // 👈 required for useState, framer-motion, shadcn sheets, etc.

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { useUser, UserButton, SignUpButton } from "@clerk/nextjs";
import { Github, Twitter, Linkedin, AlignLeft, Sparkles } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { isSignedIn } = useUser();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border shadow-sm"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="hidden md:flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
            className="p-1 rounded-full bg-gradient-to-r from-primary to-accent"
          >
            <Sparkles className="w-5 h-5 text-purple-500" />
          </motion.div>
          <span className="text-xl font-bold gradient-text">CupChat AI</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { href: "/home", label: "Home" },
            { href: "/features", label: "Features" },
            { href: "/working", label: "How it Works" },
            { href: "/plans", label: "Pricing" },
            { href: "/integrate", label: "Integration" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <motion.div key={item.href} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="md:hidden">
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              <AlignLeft className="w-6 h-6" />
            </motion.div>
          </SheetTrigger>
          <SheetContent className="w-80">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <div className="p-1 rounded-full bg-gradient-to-r from-primary to-accent">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="gradient-text">AI Onboard</span>
              </SheetTitle>
              <SheetDescription className="text-left">
                <nav className="flex flex-col space-y-4 mt-8">
                  {[
                    { href: "/home", label: "Home" },
                    { href: "/features", label: "Features" },
                    { href: "/working", label: "How it Works" },
                    { href: "/plans", label: "Pricing" },
                    { href: "/integrate", label: "Integration" },
                    { href: "/contact", label: "Contact" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-200"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            {[
              { href: "https://x.com/TayyabFayyaz21", icon: Twitter, label: "Twitter" },
              { href: "https://github.com", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/tayyab-fayyaz-25757b277/", icon: Linkedin, label: "LinkedIn" },
            ].map((social) => (
              <motion.div key={social.label} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                <a
                  href={social.href}
                  target="_blank"
                  aria-label={social.label}
                  className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
          <Link href="/dashboard">
            <div className="flex items-center gap-4">
              {isSignedIn ? (
                // ✅ Show Clerk’s profile dropdown if signed in
                <Link href="/dashboard">
                  <Button variant="outline" size="sm" className="m-3 cursor-pointer border-primary/30 hover:bg-primary/10">
                    Dashboard
                  </Button>
                  <UserButton afterSignOutUrl="/home"/>
                </Link>

              ) : (
                // ✅ Show Sign Up button if not signed in
                <SignUpButton mode="modal">
                  <Button variant="default" size="sm" className="text-sm px-6 text-primary-foreground">
                    Sign Up
                  </Button>
                </SignUpButton>
              )}
            </div>
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
