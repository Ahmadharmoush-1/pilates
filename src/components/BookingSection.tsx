import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, User, Phone, MessageSquare, Send } from "lucide-react";

const BookingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Dr. Alaa, I would like to book an appointment.%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0APreferred Date: ${formData.date}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/96170698298?text=${message}`, "_blank");
  };

  return (
    <section ref={ref} id="booking" className="py-20 lg:py-32 bg-background">
      <div className="luxury-container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="luxury-badge mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              Book Now
            </span>
            <h2 className="section-title text-foreground mt-4">
              Schedule Your <span className="gold-gradient-text">Consultation</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Take the first step towards your perfect smile. Book your 
              appointment today.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="luxury-card"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <User className="w-4 h-4 text-gold" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="Your full name"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="+961 XX XXX XXX"
                />
              </div>
            </div>

            {/* Preferred Date */}
            <div className="space-y-2 mb-6">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gold" />
                Preferred Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-foreground"
              />
            </div>

            {/* Message */}
            <div className="space-y-2 mb-8">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-gold" />
                Message (Optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground"
                placeholder="Tell us about your smile goals..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full luxury-button text-lg py-5"
            >
              <Send className="w-5 h-5 mr-2" />
              Send via WhatsApp
            </motion.button>

            <p className="text-center text-sm text-muted-foreground mt-4">
              Your message will be sent directly to Dr. Alaa via WhatsApp
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
