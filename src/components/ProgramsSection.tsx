import { motion } from "framer-motion";
import { Gamepad2, UtensilsCrossed, Music } from "lucide-react";
import barImg from "@/assets/bar-event.jpg";
import brunchImg from "@/assets/brunch-event.jpg";
import heroImg from "@/assets/hero-people.jpg";

const programs = [
  {
    icon: Gamepad2,
    title: "Game Show Bingo",
    subtitle: "Chicago's Interactive Trivia Experience",
    description: "Combines trivia, music, and prizes for maximum engagement. Perfect for bars, restaurants, and corporate events.",
    image: heroImg,
    tag: "Most Popular",
  },
  {
    icon: UtensilsCrossed,
    title: "Themed Brunches",
    subtitle: "Drag Bingo & Family Brunch Shows",
    description: "Weekend brunch entertainment featuring drag performances, family-friendly shows, and interactive dining experiences.",
    image: brunchImg,
    tag: "Weekends",
  },
  {
    icon: Music,
    title: "Music Theme Nights",
    subtitle: "Name That Tune & More",
    description: "Decade-themed music nights, karaoke competitions, and interactive music experiences that get crowds singing along.",
    image: barImg,
    tag: "Nightly",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-24 bg-gradient-warm-soft">
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
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            Chicago's Most Popular <span className="text-gradient-warm">Entertainment</span>
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
              className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center bg-background rounded-3xl overflow-hidden shadow-warm p-4 md:p-0`}
            >
              <div className="md:w-1/2 relative overflow-hidden rounded-2xl md:rounded-none">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-72 md:h-80 object-cover"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <span className="absolute top-4 left-4 bg-gradient-warm text-primary-foreground font-body text-xs font-bold px-3 py-1 rounded-full">
                  {program.tag}
                </span>
              </div>
              <div className="md:w-1/2 p-6 md:p-10">
                <program.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-3xl font-bold text-foreground mb-2">{program.title}</h3>
                <p className="font-body text-primary font-semibold mb-3">{program.subtitle}</p>
                <p className="font-body text-muted-foreground leading-relaxed">{program.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
