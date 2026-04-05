import { motion } from "framer-motion";
import { Heart, Beer, PartyPopper, CheckCircle } from "lucide-react";
import corporateImg from "@/assets/corporate-event.jpg";
import barImg from "@/assets/bar-event.jpg";
import privateImg from "@/assets/private-party.jpg";

const services = [
  {
    icon: Heart,
    title: "Corporate & Healthcare Events",
    description: "Specialized team building and wellness programs that bring your crew closer.",
    image: corporateImg,
    benefits: ["Stress Relief Activities", "Team Bonding", "Morale Boosting", "Customized Programs"],
  },
  {
    icon: Beer,
    title: "Restaurant & Bar Entertainment",
    description: "Turn slow nights into packed houses with our interactive entertainment.",
    image: barImg,
    benefits: ["Increased Revenue", "Customer Retention", "Social Media Buzz", "Weekly Programming"],
  },
  {
    icon: PartyPopper,
    title: "Private Event Experiences",
    description: "Luxury entertainment for parties, celebrations, and special occasions.",
    image: privateImg,
    benefits: ["Custom Themes", "Premium Service", "Professional Hosts", "Full Production"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm font-semibold text-primary uppercase tracking-widest">
            Who Are You?
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            Select Your <span className="text-gradient-warm">Experience</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <service.icon className="absolute bottom-4 left-4 w-8 h-8 text-primary-foreground" />
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="font-body text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 font-body text-sm text-foreground/80">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
