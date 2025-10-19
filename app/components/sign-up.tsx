"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { Dialog } from "@headlessui/react";

// Dynamically load Clerk SignUp
const SignUp = dynamic(() => import("@clerk/nextjs").then(mod => mod.SignUp), {
  ssr: false,
});

export default function ClerkSecureSignUpModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
}) {
  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <Dialog.Panel className="bg-white p-4 rounded-xl shadow-xl max-w-md w-full">
          <Dialog.Title className="text-xl font-bold mb-4 text-center">Create Your Account</Dialog.Title>
          <div className="flex justify-center">
            <SignUp
              appearance={{
                elements: {
                  card: "shadow-none",
                  formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white",
                },
              }}
              afterSignUpUrl="/dashboard"
              signInUrl="/sign-in"
            />
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
