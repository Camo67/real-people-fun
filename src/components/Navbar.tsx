import { useState } from "react";
import irlLogo from "@/assets/irl-logo.png";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Programs", href: "#programs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Book IRL Events", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="font-display text-2xl font-bold text-neon tracking-tight">
          IRL Events
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm font-medium text-card-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="tel:6305509595"
          className="hidden md:flex items-center gap-2 bg-gradient-neon text-primary-foreground px-5 py-2.5 rounded-full font-body font-semibold text-sm shadow-neon hover:opacity-90 transition-opacity"
        >
          <Phone className="w-4 h-4" />
          CALL NOW!
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden text-card-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-card-foreground/80 hover:text-primary py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:6305509595"
                className="flex items-center justify-center gap-2 bg-gradient-neon text-primary-foreground px-5 py-3 rounded-full font-body font-semibold mt-2"
              >
                <Phone className="w-4 h-4" />
                (630) 550-9595
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
