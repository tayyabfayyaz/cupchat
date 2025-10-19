import * as React from "react";
import { Button } from "../../components/ui/button";
import { ContactInput, ContactTextarea } from "../../components/ui/contact-input";
import { User, Mail, MessageSquare } from "lucide-react"; // icons for labels

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    console.log("Contact form data:", data);
    e.currentTarget.reset();
  };

  return (
    <div className="w-full max-w-lg">
      <div className="p-8 rounded-2xl shadow-xl border border-transparent bg-gradient-to-r from-purple-100/50 to-indigo-100/50 backdrop-blur-md">
        <div className="mb-6 text-center">
          {/* gradient headline */}
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            Send us a message
          </h2>
          <p className="text-sm text-slate-600">
            Fill out the form below and we will respond as soon as possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="space-y-1">
            <label
              htmlFor="name"
              className="flex items-center gap-2 text-sm font-medium text-slate-700"
            >
              <User className="h-4 w-4 text-purple-500" />
              Your Name
            </label>
            <ContactInput
              name="name"
              placeholder="Enter your full name"
              required
              className=" focus:border-purple-400 rounded-lg border border-border/30"
            />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="flex items-center gap-2 text-sm font-medium text-slate-700"
            >
              <Mail className="h-4 w-4 text-indigo-500" />
              Email Address
            </label>
            <ContactInput
              name="email"
              type="email"
              placeholder="your.email@example.com"
              required
              className="border border-border/30 focus:border-indigo-400 rounded-lg"
            />
          </div>

          {/* Message */}
          <div className="space-y-1">
            <label
              htmlFor="message"
              className="flex items-center gap-2 text-sm font-medium text-slate-700"
            >
              <MessageSquare className="h-4 w-4 text-pink-500" />
              Your Message
            </label>
            <ContactTextarea
              name="message"
              placeholder="Tell us how we can help you..."
              rows={5}
              required
              className="border border-border/30 focus:border-pink-400 rounded-lg"
            />
          </div>

          {/* Button with gradient */}
          <Button
            type="submit"
            size="lg"
            className="w-full font-semibold text-base bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg shadow-lg"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}
