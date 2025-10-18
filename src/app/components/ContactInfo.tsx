import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "support@ai-onboard.com",
    href: "mailto:support@ai-onboard.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 312 8997727",
    href: "tel:+923128997727",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Karachi, Pakistan",
    href: "https://maps.google.com/?q=Karachi,Pakistan",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Fri: 9AM - 6PM PST",
    href: null,
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-8 ">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-4">Get in touch</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Ready to transform your onboarding process? We are here to help you create 
          exceptional user experiences that drive engagement and retention.
        </p>
      </div>
      
      <div className="space-y-6 p-8 rounded-2xl shadow-xl border border-transparent bg-gradient-to-r from-purple-100/50 to-indigo-100/50 backdrop-blur-md">
        {contactDetails.map((detail, index) => {
          const Icon = detail.icon;
          const content = (
            <div className="flex items-start gap-4 p-4 rounded-xl bg-contact-surface-elevated/50 border border-border/30 transition-smooth hover:bg-contact-surface-elevated hover:border-contact-primary/30 group">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-bounce">
                  <Icon className="w-5 h-5 text-purple-500" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{detail.label}</h3>
                <p className="text-muted-foreground">{detail.value}</p>
              </div>
            </div>
          );
          
          return detail.href ? (
            <a
              key={index}
              href={detail.href}
              target={detail.href.startsWith('http') ? '_blank' : undefined}
              rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="block"
            >
              {content}
            </a>
          ) : (
            <div key={index}>
              {content}
            </div>
          );
        })}
      </div>
      <div className="p-6 rounded-xl bg-gradient-accent text-white relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="font-bold mb-2">Ready to get started?</h3>
          <p className="text-white/90 mb-4">
            Join thousands of companies already using our platform to create better user experiences.
          </p>
          <div className="flex gap-3">
            <div className="w-2 h-2 rounded-full bg-white/40 animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-white/60 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 rounded-full bg-white/80 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
      </div>
    </div>
  );
}