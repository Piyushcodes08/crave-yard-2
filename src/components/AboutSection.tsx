import { motion } from "framer-motion";
import { Star, Award, Users, Flame } from "lucide-react";
import logo from "@/assets/logo.png";

const stats = [
  { icon: Star, value: "4.1★", label: "Rating" },
  { icon: Users, value: "10K+", label: "Happy Customers" },
  { icon: Flame, value: "46+", label: "Menu Items" },
  { icon: Award, value: "#1", label: "Momos in Rajkot" },
];

const AboutSection = () => (
  <section id="about" className="py-20 px-4 bg-secondary/30">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">Our Story</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
            About <span className="text-gradient">Crave Yard</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Born from a passion for authentic street-style Chinese food, Crave Yard has become Rajkot's go-to destination for mouth-watering momos, sizzling noodles, and irresistible Chinese snacks.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We believe great food should be accessible to everyone. Every dish is crafted with fresh ingredients, bold flavors, and the love that makes street food special. From our signature Paneer Kurkure Momos to our Loaded Fries — every bite tells our story.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card rounded-xl p-4 text-center"
              >
                <s.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                <span className="block font-display text-lg font-bold text-foreground">{s.value}</span>
                <span className="text-xs text-muted-foreground">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-primary/10 blur-3xl" />
            <img
              src={logo}
              alt="Crave Yard"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover glow-orange border-4 border-primary/20"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
