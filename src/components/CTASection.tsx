import { motion } from "framer-motion";
import { Phone, Mail, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-gameshow.jpg";

const CTASection = () => {
  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="People celebrating at IRL event" className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Sparkles className="w-10 h-10 text-primary mx-auto mb-6 animate-pulse-glow" />
          <h2 className="font-display text-4xl md:text-6xl font-bold text-card-foreground mb-6">
            Ready to Create Something
            <br />
            <span className="text-neon">Amazing?</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto mb-10 text-lg leading-relaxed">
            Join hundreds of Chicago venues and organizations that trust IRL Interactive Events. 
            From intimate private gatherings to large corporate events.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:6305509595"
              className="flex items-center justify-center gap-2 bg-gradient-neon text-primary-foreground px-10 py-4 rounded-full font-body font-bold text-lg shadow-neon-lg hover:scale-105 transition-transform"
            >
              <Phone className="w-5 h-5" />
              Call (630) 550-9595
            </a>
            <a
              href="mailto:jason@irlevents.fun"
              className="flex items-center justify-center gap-2 border border-neon text-primary px-10 py-4 rounded-full font-body font-semibold text-lg hover:bg-primary/10 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email jason@irlevents.fun
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
