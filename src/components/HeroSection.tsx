import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
import BookingCards from "./BookingCards";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-4 pt-28 pb-8">
        <motion.img
          src={logo}
          alt="Crave Yard Logo"
          className="h-24 w-24 rounded-full mb-6 glow-orange"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Crave Yard
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-2 font-body"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Momos & Chinese
        </motion.p>
        <motion.p
          className="text-base md:text-lg text-gradient font-semibold mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Rajkot's Favorite Momos & Chinese Food
        </motion.p>
        <motion.div
          className="flex gap-4 flex-wrap justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a
            href="#menu"
            className="rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground hover:brightness-110 transition"
          >
            View Menu
          </a>
          <a
            href="tel:+918401681173"
            className="rounded-full border border-primary px-8 py-3 font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition"
          >
            Order Now
          </a>
        </motion.div>
      </div>

      {/* Booking Cards at bottom 20% */}
      <div className="relative z-10 px-4 pb-8">
        <BookingCards />
      </div>
    </section>
  );
};

export default HeroSection;
