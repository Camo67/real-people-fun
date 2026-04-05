import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-people.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="People laughing and having fun at an IRL event"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-primary/20 backdrop-blur-sm text-primary-foreground font-body text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-primary-foreground/20">
              🎉 150,000+ Hours of IRL Fun Delivered
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-5xl md:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6"
          >
            Bring People
            <br />
            <span className="text-gradient-warm">Back Together</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-body text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-lg"
          >
            Chicago's premier interactive entertainment. Game shows, themed brunches, 
            music nights & private events that create real connections and unforgettable moments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <a
              href="tel:6305509595"
              className="flex items-center justify-center gap-2 bg-gradient-warm text-primary-foreground px-8 py-4 rounded-full font-body font-bold text-lg shadow-warm-lg hover:scale-105 transition-transform"
            >
              <Phone className="w-5 h-5" />
              Call (630) 550-9595
            </a>
            <a
              href="https://wa.me/16305509595"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border border-primary-foreground/30 px-8 py-4 rounded-full font-body font-semibold text-lg hover:bg-primary-foreground/20 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex items-center gap-2 text-primary-foreground/60 font-body text-sm"
          >
            <MapPin className="w-4 h-4" />
            Serving Chicago, Naperville, Evanston & all suburbs within 50 miles
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
