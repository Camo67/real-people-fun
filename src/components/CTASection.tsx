import { motion } from "framer-motion";
import { Phone, Mail, Sparkles } from "lucide-react";
import privateImg from "@/assets/private-party.jpg";

const CTASection = () => {
  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={privateImg} alt="People celebrating" className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
        <div className="absolute inset-0 bg-foreground/75" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Sparkles className="w-10 h-10 text-warm-gold mx-auto mb-6 animate-float" />
          <h2 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Ready to Create Something
            <br />
            <span className="text-gradient-warm">Amazing?</span>
          </h2>
          <p className="font-body text-primary-foreground/70 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
            From intimate private gatherings to large corporate events, we bring the excitement 
            that transforms ordinary occasions into unforgettable experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:6305509595"
              className="flex items-center justify-center gap-2 bg-gradient-warm text-primary-foreground px-10 py-4 rounded-full font-body font-bold text-lg shadow-warm-lg hover:scale-105 transition-transform"
            >
              <Phone className="w-5 h-5" />
              Call (630) 550-9595
            </a>
            <a
              href="mailto:jason@irlevents.fun"
              className="flex items-center justify-center gap-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border border-primary-foreground/30 px-10 py-4 rounded-full font-body font-semibold text-lg hover:bg-primary-foreground/20 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
