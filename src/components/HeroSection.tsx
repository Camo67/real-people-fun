import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-gameshow.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Crowd of people having fun at IRL game show event"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block border border-neon bg-primary/10 text-primary font-body text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border-neon">
            🎉 150,000+ Hours of IRL Interactive Entertainment
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-5xl md:text-7xl font-extrabold text-card-foreground leading-[1.1] mb-4"
        >
          Interactive Events{" "}
          <span className="text-neon">Chicago</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="font-body text-xl md:text-2xl text-neon-purple font-semibold mb-4"
        >
          Outside-the-Box Events In-A-Box
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-body text-base md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed"
        >
          Chicago's premier Pop-Up Experiences specialists serving the greater Chicagoland area. Game shows, themed brunches & private events.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <a
            href="tel:6305509595"
            className="flex items-center justify-center gap-2 bg-gradient-neon text-primary-foreground px-8 py-4 rounded-full font-body font-bold text-lg shadow-neon-lg hover:scale-105 transition-transform"
          >
            <Phone className="w-5 h-5" />
            Call Now: (630) 550-9595
          </a>
          <a
            href="https://wa.me/16305509595"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-neon text-primary px-8 py-4 rounded-full font-body font-semibold text-lg hover:bg-primary/10 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex items-center justify-center gap-2 text-muted-foreground font-body text-sm"
        >
          <MapPin className="w-4 h-4 text-primary" />
          Serving Chicago, Naperville, Oak Park, Evanston & all suburbs within 50 miles
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
