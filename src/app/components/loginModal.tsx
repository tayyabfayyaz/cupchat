"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { Dialog } from "@headlessui/react";

// Dynamically load Clerk SignIn to prevent hydration error
const SignIn = dynamic(() => import("@clerk/nextjs").then(mod => mod.SignIn), {
  ssr: false,
});

interface ClerkLoginModalProps {
  open: boolean;
  setOpen: (val: boolean) => void;
}

const ClerkLoginModal: React.FC<ClerkLoginModalProps> = ({ open, setOpen }) => {
  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <Dialog.Panel className="bg-white p-4 rounded-xl shadow-xl max-w-md w-full">
          <Dialog.Title className="text-xl font-bold mb-4 text-center">Login to Your Account</Dialog.Title>
          <div className="flex justify-center">
            <SignIn
              appearance={{
                elements: {
                  card: "shadow-none",
                  formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white",
                },
              }}
              afterSignInUrl="/dashboard"
              signUpUrl="/sign-up" // fallback if user doesn’t have account
            />
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ClerkLoginModal;
