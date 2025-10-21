"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  user: string
  comment: string
}

export function TestimonialCard({ user, comment }: TestimonialCardProps) {
  return (
    <motion.div className="flex-shrink-0 w-80 p-6 rounded-lg border border-border bg-card" whileHover={{ y: -5 }}>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-purple-600 text-purple-600" />
        ))}
      </div>
      <p className="text-foreground mb-4 leading-relaxed">"{comment}"</p>
      <p className="font-semibold text-sm text-foreground">{user}</p>
    </motion.div>
  )
}
