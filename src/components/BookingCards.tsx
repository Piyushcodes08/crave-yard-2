import { useState } from "react";
import { CalendarDays, ShoppingBag, Users, Phone, User } from "lucide-react";
import { motion } from "framer-motion";

const BookingCards = () => {
  const [tableForm, setTableForm] = useState({ name: "", phone: "", guests: "2", date: "", time: "" });
  const [orderForm, setOrderForm] = useState({ name: "", phone: "", type: "delivery" });

  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Book Table */}
        <motion.div
          className="glass-card rounded-2xl p-6 glow-orange"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="rounded-full bg-primary/20 p-3">
              <CalendarDays className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground">Book Your Table</h3>
          </div>
          <div className="grid gap-3">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                placeholder="Your Name"
                value={tableForm.name}
                onChange={(e) => setTableForm({ ...tableForm, name: e.target.value })}
                className="w-full rounded-lg bg-secondary pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground border-none outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                placeholder="Phone Number"
                value={tableForm.phone}
                onChange={(e) => setTableForm({ ...tableForm, phone: e.target.value })}
                className="w-full rounded-lg bg-secondary pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground border-none outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <select
                  value={tableForm.guests}
                  onChange={(e) => setTableForm({ ...tableForm, guests: e.target.value })}
                  className="w-full rounded-lg bg-secondary pl-10 pr-4 py-3 text-sm text-foreground border-none outline-none focus:ring-2 focus:ring-primary appearance-none"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>{n} Guest{n > 1 ? "s" : ""}</option>
                  ))}
                </select>
              </div>
              <input
                type="date"
                value={tableForm.date}
                onChange={(e) => setTableForm({ ...tableForm, date: e.target.value })}
                className="rounded-lg bg-secondary px-3 py-3 text-sm text-foreground border-none outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="time"
                value={tableForm.time}
                onChange={(e) => setTableForm({ ...tableForm, time: e.target.value })}
                className="rounded-lg bg-secondary px-3 py-3 text-sm text-foreground border-none outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button className="w-full rounded-lg bg-primary py-3 font-semibold text-primary-foreground hover:brightness-110 transition mt-1">
              Book Table
            </button>
          </div>
        </motion.div>

        {/* Order Food */}
        <motion.div
          className="glass-card rounded-2xl p-6 glow-orange"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="rounded-full bg-primary/20 p-3">
              <ShoppingBag className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground">Order Your Food</h3>
          </div>
          <div className="grid gap-3">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                placeholder="Your Name"
                value={orderForm.name}
                onChange={(e) => setOrderForm({ ...orderForm, name: e.target.value })}
                className="w-full rounded-lg bg-secondary pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground border-none outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                placeholder="Phone Number"
                value={orderForm.phone}
                onChange={(e) => setOrderForm({ ...orderForm, phone: e.target.value })}
                className="w-full rounded-lg bg-secondary pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground border-none outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex gap-3">
              {["delivery", "pickup"].map((t) => (
                <button
                  key={t}
                  onClick={() => setOrderForm({ ...orderForm, type: t })}
                  className={`flex-1 rounded-lg py-3 text-sm font-semibold capitalize transition ${
                    orderForm.type === t
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              📍 Near Virani School, Kotecha Nagar, Rajkot · ⏰ 5:30 PM – 12:00 AM
            </p>
            <a
              href="tel:+918401681173"
              className="w-full text-center rounded-lg bg-primary py-3 font-semibold text-primary-foreground hover:brightness-110 transition mt-1 block"
            >
              Order Now – Call Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BookingCards;
