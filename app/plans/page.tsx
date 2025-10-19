"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Zap, Rocket, Gem } from "lucide-react";
import { Dialog } from "@headlessui/react";
import { Button } from "../../components/ui/button";

const plans = [
  {
    name: "Free",
    price: "$0",
    icon: <Zap className="w-6 h-6 text-blue-600" />,
    features: ["Basic Agent", "Limited Queries", "Email Support"],
    tier: "free",
  },
  {
    name: "Pro",
    price: "$29/month",
    icon: <Rocket className="w-6 h-6 text-green-600" />,
    features: ["Unlimited Queries", "Custom Embedding", "Priority Support"],
    tier: "pro",
  },
  {
    name: "Enterprise",
    price: "Custom",
    icon: <Gem className="w-6 h-6 text-purple-600" />,
    features: ["Dedicated Server", "Custom LLM", "24/7 Support", "Security Suite"],
    tier: "enterprise",
  },
];

export default function PricingPage() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedPlan, setSelectedPlan] = React.useState("");

  const handleSelect = (tier: string) => {
    setSelectedPlan(tier);
    setIsOpen(true);
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    // ⚠️ Stripe Checkout API Call
    console.log("Initiating payment for:", selectedPlan);
    // Example:
    // fetch("/api/stripe/checkout", { method: "POST", body: JSON.stringify({ plan: selectedPlan }) })
  };

  return (
    <main className="min-h-screen bg-white px-4 md:px-20 py-16 text-black">
      <div className="w-full bg-red-500 p-3 text-center text-white text-xl mb-5"><h3 className="">Pricing system is temporary disabled becuase of testing it with some ethical users</h3></div>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Flexible Pricing</h1>
        <p className="text-gray-600">Choose a plan that fits your needs. Cancel anytime.</p>
      </section>

      <div className="grid md:grid-cols-3 gap-10">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="border rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <div className="flex items-center justify-center mb-4">{plan.icon}</div>
            <h3 className="text-2xl font-semibold text-center mb-1">{plan.name}</h3>
            <p className="text-center text-lg text-gray-700 mb-4">{plan.price}</p>
            <ul className="space-y-2 mb-6">
              {plan.features.map((f, idx) => (
                <li key={idx} className="text-sm text-gray-600 text-center">
                  ✅ {f}
                </li>
              ))}
            </ul>
            <Button
              className="w-full"
              onClick={() => handleSelect(plan.tier)}
              disabled={plan.tier === "free"}
            >
              {plan.tier === "free" ? "Current Plan" : "Choose Plan"}
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Payment Form Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white p-6 rounded-xl max-w-md w-full shadow-lg space-y-4">
            <Dialog.Title className="text-xl font-bold text-center">Secure Payment</Dialog.Title>
            <form onSubmit={handlePayment} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full border px-3 py-2 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Cardholder Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full border px-3 py-2 rounded-md"
                />
              </div>

              {/* 🔐 Real Stripe Card Field will go here */}
              <div className="bg-gray-100 p-4 rounded text-center text-gray-500 text-sm">
                🔐 Card Field (Stripe.js / Elements will be injected here)
              </div>

              <Button type="submit" className="w-full">
                Pay with Stripe
              </Button>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </main>
  );
}
