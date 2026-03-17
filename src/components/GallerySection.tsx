import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";
import gallery6 from "@/assets/gallery-6.png";
import gallery7 from "@/assets/gallery-7.png";
import gallery8 from "@/assets/gallery-8.png";

const images = [
  { src: gallery1, title: "Party Vibes", tall: true },
  { src: gallery2, title: "Our Space", tall: false },
  { src: gallery3, title: "Cozy Seating", tall: false },
  { src: gallery4, title: "Friends & Food", tall: true },
  { src: gallery5, title: "Ambiance", tall: false },
  { src: gallery6, title: "Upper Deck", tall: true },
  { src: gallery7, title: "Counter", tall: false },
  { src: gallery8, title: "Menu Card", tall: false },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Gallery</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2">
            Inside Crave Yard
          </h2>
        </motion.div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden rounded-xl break-inside-avoid"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="font-display text-lg font-bold text-foreground">{img.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
