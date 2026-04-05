import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold text-neon mb-2">IRL Events</h3>
            <p className="font-body text-muted-foreground text-sm">Outside-the-Box Events In-A-Box</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 font-body text-sm text-muted-foreground">
            <a href="tel:6305509595" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" /> (630) 550-9595
            </a>
            <a href="mailto:jason@irlevents.fun" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" /> jason@irlevents.fun
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Chicago Metro Area
            </span>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} IRL Interactive Events. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
