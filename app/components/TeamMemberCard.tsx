"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface TeamMemberCardProps {
  name: string
  role: string
  index: number
}

export function TeamMemberCard({ name, role, index }: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="mb-4 w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-blue-400 overflow-hidden">
        <Image
          src="/pictures/team-member-avatar.jpg"
          alt={name}
          width={96}
          height={96}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-muted-foreground text-sm">{role}</p>
    </motion.div>
  )
}
