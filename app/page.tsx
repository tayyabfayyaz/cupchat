"use client"

import { Button } from "../components/ui/button"
import {
  ShieldCheck,
  Globe,
  MousePointerClick,
  MessageCircle,
  FileText,
  Brain,
  ArrowRightCircle,
  PlayCircle,
  Sparkles,
  Zap,
  Shield,
  Rocket,
} from "lucide-react"
import { motion } from "framer-motion"
import { FeatureCard } from "./components/FeatureCard"
import { TestimonialCard } from "./components/TestimonialCard"
import { TeamMemberCard } from "./components/TeamMemberCard"
import Image from "next/image"

const team = [
  { name: "Tayyab Fayyaz", role: "Founder / Developer" },
  { name: "Areeba Khan", role: "AI Research Lead" },
  { name: "Usama Ali", role: "UI/UX Designer" },
]

const testimonials = [
  {
    user: "Hassan R.",
    comment: "AI Onboard helped reduce our support tickets by 40%. Highly recommended!",
  },
  {
    user: "Ameer K.",
    comment: "AI Onboard helped reduce our support tickets by 40%. Highly recommended!",
  },
  {
    user: "Sarah N.",
    comment: "Smooth onboarding experience for our SaaS product. Loved the smart agent UI!",
  },
  {
    user: "Ahmed B.",
    comment: "Fast integration and works across languages. This is the future of onboarding!",
  },
]

const features = [
  {
    icon: MessageCircle,
    title: "Understands User Queries",
    description: "Advanced NLP to comprehend user intent and provide relevant guidance",
  },
  {
    icon: MousePointerClick,
    title: "Step-by-Step Guidance",
    description: "Interactive tours that guide users through complex workflows",
  },
  {
    icon: ShieldCheck,
    title: "Interactive Screen Help",
    description: "Contextual assistance that appears exactly when users need it",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Seamless support for global audiences in multiple languages",
  },
]

const gettingStartedSteps = [
  {
    icon: FileText,
    title: "Upload Documentation",
    description: "Configure your knowledge source",
  },
  {
    icon: Brain,
    title: "Train the Assistant",
    description: "The agent learns your product flow",
  },
  {
    icon: MousePointerClick,
    title: "Embed on Your Site",
    description: "Use JavaScript or API integration",
  },
]

export default function Index() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20"
                >
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">AI-Powered Onboarding</span>
                </motion.div>

                <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
                  Meet Your New <span className="text-purple-600">AI Onboarding Assistant</span>
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Simplify user onboarding and guide customers through your product with an interactive AI that
                  understands, adapts, and delivers personalized experiences.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="default"
                  size="lg"
                  className="text-lg px-8 py-6 bg-purple-600 hover:bg-purple-700 text-white cursor-pointer"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Get Started Free
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 border-2 border-purple-600 text-purple-600 hover:bg-purple-50 cursor-pointer bg-transparent"
                >
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex items-center gap-6 text-sm text-muted-foreground"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-purple-600" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-purple-600" />
                  <span>5-Min Setup</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-full h-96 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl overflow-hidden">
                <Image
                  src="/pictures/ai-web-back.jpg"
                  alt="AI Assistant Interface"
                  className="w-full h-full object-cover"
                  fill
                  priority
                />
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-xl opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl opacity-40"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your user experience with intelligent assistance that guides, educates, and delights your
              customers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Getting Started</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Deploy your AI assistant in minutes with our simple three-step process
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {gettingStartedSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="mx-auto w-16 h-16 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                    <step.icon className="w-8 h-8" />
                  </div>
                  {index < gettingStartedSteps.length - 1 && (
                    <ArrowRightCircle className="hidden md:block absolute top-8 -right-16 w-6 h-6 text-muted-foreground" />
                  )}
                </div>
                <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Meet the Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate experts dedicated to revolutionizing user onboarding experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <TeamMemberCard key={index} name={member.name} role={member.role} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied customers who have transformed their onboarding experience
            </p>
          </motion.div>

          <motion.div
            className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide"
            initial={{ x: 0 }}
            animate={{ x: [0, -300, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 20, ease: "linear" }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} user={testimonial.user} comment={testimonial.comment} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white text-balance">
              Ready to Transform Your User Experience?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Start your free trial today and see how AI can revolutionize your onboarding process.
            </p>
            <Button size="lg" className="text-lg px-12 py-6 bg-white text-purple-600 hover:bg-gray-100">
              <Rocket className="w-5 h-5 mr-2" />
              Start Free Trial
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
