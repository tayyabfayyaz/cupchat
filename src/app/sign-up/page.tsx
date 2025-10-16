"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Dynamic imports to avoid hydration mismatch
const SignUp = dynamic(() => import("@clerk/nextjs").then(mod => mod.SignUp), { ssr: false });
const SignIn = dynamic(() => import("@clerk/nextjs").then(mod => mod.SignIn), { ssr: false });

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Welcome to CupChat Onboard</h1>

        <Tabs defaultValue="signup" className="w-full">
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>

          <TabsContent value="signup">
            <SignUp
              afterSignUpUrl="/dashboard"
              signInUrl="/sign-up"
              appearance={{
                elements: {
                  formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white",
                },
              }}
            />
          </TabsContent>

          <TabsContent value="login">
            <SignIn
              afterSignInUrl="/dashboard"
              signUpUrl="/sign-up"
              appearance={{
                elements: {
                  formButtonPrimary: "bg-green-600 hover:bg-green-700 text-white",
                },
              }}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
