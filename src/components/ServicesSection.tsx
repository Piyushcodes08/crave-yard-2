import { Truck, ShoppingBag, UtensilsCrossed } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: ShoppingBag,
    title: "Takeaway",
    description: "Quick grab-and-go orders packed fresh for you. Skip the wait with our express takeaway counter.",
  },
  {
    icon: Truck,
    title: "Food Delivery",
    description: "Hot momos and Chinese delivered straight to your doorstep across Rajkot. Fast & reliable.",
  },
  {
    icon: UtensilsCrossed,
    title: "Street Food Counter",
    description: "Experience the authentic street food vibe at our open counter. Watch your food being made live!",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 px-4">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="text-primary font-medium text-sm uppercase tracking-widest">What We Offer</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
          Our <span className="text-gradient">Services</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass-card rounded-2xl p-8 text-center hover-lift group"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <s.icon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
