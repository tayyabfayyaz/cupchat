import { Card, CardContent } from "../../components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  user: string;
  comment: string;
  rating?: number;
}

export const TestimonialCard = ({ user, comment, rating = 5 }: TestimonialCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="hero-card min-w-[320px] max-w-sm flex-shrink-0 border-0 bg-gradient-to-br from-white to-muted">
        <CardContent className="py-8 px-6">
          <div className="flex mb-4">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-foreground italic leading-relaxed mb-4">{comment}</p>
          <p className="text-right font-semibold text-primary">— {user}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};