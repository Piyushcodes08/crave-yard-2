import { MapPin, Clock, Phone, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const FooterSection = () => (
  <footer id="contact" className="border-t border-border py-16 px-4">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Crave Yard" className="h-12 w-12 rounded-full" />
            <div>
              <span className="font-display text-lg font-bold text-foreground">Crave Yard</span>
              <span className="block text-xs text-muted-foreground">Momos & More</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
            Street-style Chinese fast food brand famous for momos, noodles, and more. Connecting people through food.
          </p>

          <div className="space-y-3">
            <div className="flex gap-3 text-sm text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Near Virani School, Kotecha Nagar, Rajkot, Gujarat 360002</span>
            </div>
            <div className="flex gap-3 text-sm text-muted-foreground">
              <Clock className="h-5 w-5 text-primary flex-shrink-0" />
              <span>5:30 PM – 12:00 AM</span>
            </div>
            <div className="flex gap-3 text-sm text-muted-foreground">
              <Phone className="h-5 w-5 text-primary flex-shrink-0" />
              <a href="tel:+918401681173" className="hover:text-primary transition-colors">+91 84016 81173</a>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-display font-bold text-foreground text-sm">Popular Items</h4>
            <ul className="flex flex-wrap gap-2">
              {["Paneer Kurkure Momos", "Cheese Afghani Momos", "Veg Tandoori Momos", "Cheese Chilli Dry", "Loaded Fries"].map((item) => (
                <li key={item} className="text-xs bg-secondary px-3 py-1.5 rounded-full text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Google Map */}
        <div className="rounded-2xl overflow-hidden border border-border h-[320px] md:h-full min-h-[280px]">
          <iframe
            title="Crave Yard Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5!2d70.7833!3d22.2833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE3JzAwLjAiTiA3MMKwNDcnMDAuMCJF!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin&q=Crave+Yard+Kotecha+Nagar+Rajkot"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
    <div className="container mx-auto pt-6 border-t border-border text-center text-xs text-muted-foreground">
      © 2026 Crave Yard – Momos & More. All rights reserved.
    </div>
  </footer>
);

export default FooterSection;
