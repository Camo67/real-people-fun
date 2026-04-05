import { motion } from "framer-motion";
import { Instagram, Youtube } from "lucide-react";

const socials = [
  { icon: Instagram, label: "Instagram", sub: "Daily event photos", color: "from-pink-500 to-orange-400", url: "https://instagram.com/irleventsfun" },
  { icon: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.87a8.28 8.28 0 0 0 4.76 1.52V7a4.84 4.84 0 0 1-1-.31z"/>
    </svg>
  ), label: "TikTok", sub: "Behind-the-scenes", color: "from-gray-800 to-gray-600", url: "https://tiktok.com/@irleventsfun" },
  { icon: Youtube, label: "YouTube", sub: "Event highlights", color: "from-red-600 to-red-500", url: "https://youtube.com/@irleventsfun" },
];

const SocialSection = () => {
  return (
    <section className="py-20 bg-gradient-warm-soft">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Follow <span className="text-gradient-warm">@irleventsfun</span>
          </h2>
          <p className="font-body text-muted-foreground mt-3">Tag us to be featured in our stories!</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`flex items-center gap-4 bg-gradient-to-r ${s.color} text-primary-foreground rounded-2xl px-8 py-5 shadow-warm font-body font-semibold`}
            >
              <s.icon className="w-6 h-6" />
              <div className="text-left">
                <div className="text-base">{s.label}</div>
                <div className="text-xs opacity-80">{s.sub}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
