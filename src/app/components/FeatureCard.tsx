'use client'
import { motion } from 'framer-motion'

interface FeatureCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
  index?: number
}

export const FeatureCard = ({ icon: Icon, title, description, index = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="p-6 rounded-2xl bg-white shadow-md border border-gray-200
                 hover:shadow-lg hover:border-primary/30 transition-all"
    >
      <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-primary to-accent
                      flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-purple-500" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  )
}
