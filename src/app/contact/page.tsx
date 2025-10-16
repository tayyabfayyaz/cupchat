// "use client";

// import * as React from "react";
// import { Mail, Phone, MapPin } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function ContactPage() {
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     alert("✅ Message sent! (Backend integration pending)");
//     // ✅ You can POST this data to `/api/contact` or use external mail service here
//   };

//   return (
//     <main className="min-h-screen bg-white px-4 md:px-20 py-16 text-black">
//       <section className="text-center mb-12">
//         <h1 className="text-4xl font-bold mb-2">📬 Get in Touch</h1>
//         <p className="text-lg text-gray-600">
//           Fill out the form and we’ll respond as soon as possible.
//         </p>
//       </section>

//       <div className="grid md:grid-cols-2 gap-12">
//         {/* Contact Form */}
//         <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-xl shadow-md">
//           <div>
//             <label className="block text-sm font-semibold mb-1">Your Name</label>
//             <input
//               type="text"
//               required
//               placeholder="John Doe"
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-semibold mb-1">Your Email</label>
//             <input
//               type="email"
//               required
//               placeholder="you@example.com"
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-semibold mb-1">Your Message</label>
//             <textarea
//               rows={5}
//               required
//               placeholder="Write your message here..."
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <Button type="submit" className="w-full">Send Message</Button>
//         </form>

//         {/* Contact Info */}
//         <div className="text-gray-700 space-y-6 text-sm">
//           <div className="flex gap-3 items-center">
//             <Mail className="text-blue-600" />
//             <span>support@ai-onboard.com</span>
//           </div>
//           <div className="flex gap-3 items-center">
//             <Phone className="text-green-600" />
//             <span>+92 312 8997727</span>
//           </div>
//           <div className="flex gap-3 items-center">
//             <MapPin className="text-red-600" />
//             <span>Karachi, Pakistan</span>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }















'use client';

import ContactForm from "@/app/components/ContactForm";
import ContactInfo from "@/app/components/ContactInfo";

export default function Contact() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative">
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-contact-primary/5 via-background to-contact-secondary/3" />
        <div className="relative container mx-auto px-4 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Let’s build something{" "}
              <span className="bg-gradient-primary bg-clip-text gradient-text">
                amazing
              </span>{" "}
              together
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have a question, need support, or want to discuss your project?
              We’d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 pb-16 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="animate-slide-up">
            <ContactInfo />
          </div>
          <div
            className="flex justify-center lg:justify-end animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Background animated blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-contact-primary/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-contact-secondary/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-contact-accent/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </main>
  );
}
