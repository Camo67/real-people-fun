import { motion } from "framer-motion";
import { Gamepad2, UtensilsCrossed, Music } from "lucide-react";
import gameshowImg from "@/assets/gameshow-live.jpg";
import brunchImg from "@/assets/brunch-event.jpg";
import boardImg from "@/assets/board-games.jpg";
import kidsImg from "@/assets/kids-costumes.jpg";

const programs = [
  {
    icon: Gamepad2,
    title: "Game Show Bingo",
    subtitle: "GSNL — Game Show Night Live",
    description: "Chicago's Interactive Trivia Experience. Perfect for bars, restaurants, and corporate events. Combines trivia, music, and prizes for maximum engagement.",
    image: gameshowImg,
    tag: "Most Popular",
  },
  {
    icon: UtensilsCrossed,
    title: "Bada Brunch",
    subtitle: "Drag Bingo & Family Brunch Shows",
    description: "Weekend brunch entertainment featuring drag performances, family-friendly shows, kids in costumes, and interactive dining experiences.",
    image: kidsImg,
    tag: "Family Fun",
  },
  {
    icon: Music,
    title: "Music Theme Nights",
    subtitle: "Name That Tune & More",
    description: "Decade-themed music nights, karaoke competitions, and interactive music experiences that get crowds singing along.",
    image: boardImg,
    tag: "Nightly",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm font-semibold text-primary uppercase tracking-widest">
            Top Program Highlights
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-card-foreground mt-3">
            Chicago's Most Popular <span className="text-neon">Entertainment</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-0 items-stretch bg-card rounded-2xl overflow-hidden border border-border hover:border-neon transition-all duration-300`}
            >
              <div className="md:w-1/2 relative overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-72 md:h-full object-cover"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <span className="absolute top-4 left-4 bg-gradient-neon text-primary-foreground font-body text-xs font-bold px-3 py-1 rounded-full">
                  {program.tag}
                </span>
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <program.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-3xl font-bold text-card-foreground mb-2">{program.title}</h3>
                <p className="font-body text-primary font-semibold mb-3">{program.subtitle}</p>
                <p className="font-body text-muted-foreground leading-relaxed">{program.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra gallery row */}
        <div id="gallery" className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[gameshowImg, brunchImg, kidsImg, boardImg].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl overflow-hidden border border-border hover:border-neon transition-all"
            >
              <img src={img} alt="IRL Event moment" className="w-full h-40 md:h-48 object-cover hover:scale-105 transition-transform duration-500" loading="lazy" width={400} height={300} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
