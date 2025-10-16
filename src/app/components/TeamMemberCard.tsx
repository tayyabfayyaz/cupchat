import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";
import { motion } from "framer-motion";

interface TeamMemberCardProps {
  name: string;
  role: string;
  index: number;
}

export const TeamMemberCard = ({ name, role, index }: TeamMemberCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <Card className="hero-card border-0 bg-gradient-to-br from-white to-muted">
        <CardContent className="py-8 px-6 text-center">
          <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
            <User className="w-8 h-8 text-purple-500" />
          </div>
          <h4 className="font-semibold text-lg text-foreground mb-2">{name}</h4>
          <p className="text-muted-foreground">{role}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};