import { useMemo, useState } from "react";
import { Star } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { menuData } from "@/data/menuData";

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<number>(4);

  const currentCategory = useMemo(
    () => menuData.find((category) => category.categoryId === activeCategory),
    [activeCategory]
  );

  if (!currentCategory) return null;

  return (
    <section
      id="menu"
      className="relative overflow-hidden py-20 md:py-28 px-4"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="mx-auto max-w-3xl text-center mb-12 md:mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs md:text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Our Menu
          </span>

          <h2 className="mt-5 font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            Crafted For Taste,
            <span className="block text-primary">Served With Style</span>
          </h2>

          <p className="mt-4 text-sm md:text-base leading-7 text-muted-foreground max-w-2xl mx-auto">
            Discover handpicked favourites from our kitchen — from refreshing
            beverages to indulgent momos, noodles, and signature snacks.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {menuData.map((category) => {
            const isActive = activeCategory === category.categoryId;

            return (
              <button
                key={category.categoryId}
                onClick={() => setActiveCategory(category.categoryId)}
                className={`group relative overflow-hidden rounded-full border px-5 md:px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground shadow-[0_10px_30px_-12px_hsl(var(--primary))]"
                    : "border-border/60 bg-secondary/60 text-muted-foreground hover:border-primary/30 hover:bg-secondary hover:text-foreground"
                }`}
              >
                <span className="relative z-10">{category.categoryName}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Current category heading */}
        <motion.div
          key={`heading-${activeCategory}`}
          className="mb-8 flex items-center justify-between gap-4 flex-wrap"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              {currentCategory.categoryName}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {currentCategory.items.length} delicious items available
            </p>
          </div>
        </motion.div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.35 }}
          >
            {currentCategory.items.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className="group overflow-hidden rounded-[26px] border border-white/10 bg-card/70 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-[0_25px_80px_-25px_rgba(0,0,0,0.55)]"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={currentCategory.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                  {/* Rating badge */}
                  <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-background/70 px-3 py-1.5 backdrop-blur-md">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-semibold text-foreground">
                      {item.rating}
                    </span>
                  </div>

                  {/* Category badge */}
                  <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-background/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-foreground/80 backdrop-blur-md">
                    {currentCategory.categoryName}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  <h4 className="text-lg md:text-xl font-semibold leading-snug text-foreground">
                    {item.name}
                  </h4>

                  {/* Price below name */}
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        Starting At
                      </span>
                      <span className="mt-1 text-2xl font-bold text-primary">
                        ₹{item.price}
                      </span>
                    </div>

                    <div className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
                      Popular Pick
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MenuSection;