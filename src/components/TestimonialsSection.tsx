import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "IRL Events transformed our corporate retreat into an unforgettable experience. The GSNL game show had everyone engaged and laughing!",
    name: "Sarah Johnson",
    company: "TechCorp Industries",
    initials: "SJ",
  },
  {
    quote: "The B2B Speed Dating event was perfectly organized. We made 12 new business connections in just one evening.",
    name: "Michael Chen",
    company: "Innovation Partners",
    initials: "MC",
  },
  {
    quote: "Our hybrid event reached over 500 participants globally. The technical execution was flawless.",
    name: "Lisa Rodriguez",
    company: "Global Marketing Solutions",
    initials: "LR",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm font-semibold text-primary uppercase tracking-widest">
            What Our Clients Say
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-card-foreground mt-3">
            Real Reviews from <span className="text-neon">Real Events</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-card rounded-2xl p-8 border border-border hover:border-neon transition-all relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-card-foreground/80 leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-neon flex items-center justify-center text-primary-foreground font-body font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="font-body font-semibold text-card-foreground text-sm">{t.name}</p>
                  <p className="font-body text-muted-foreground text-xs">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
