import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, MessageCircle, Mail } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleCall = () => {
    window.location.href = "tel:+96170698298";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/96170698298", "_blank");
  };

  return (
    <section ref={ref} id="contact" className="py-20 lg:py-32 bg-secondary">
      <div className="luxury-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="luxury-badge mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            Visit Us
          </span>
          <h2 className="section-title text-foreground mt-4">
            Location & <span className="gold-gradient-text">Contact</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Find us in the heart of Beirut, at Center Badaro 5193.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-luxury h-80 lg:h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.5!2d35.5!3d33.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUyJzEyLjAiTiAzNcKwMzAnMDAuMCJF!5e0!3m2!1sen!2slb!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr Alaa El Cheikh Location"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="luxury-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-foreground mb-1">
                    Clinic Address
                  </h3>
                  <p className="text-muted-foreground">
                    Dr Alaa El Cheikh<br />
                    Beirut – Badaro – Center Badaro 5193
                  </p>
                </div>
              </div>
            </div>

            <div className="luxury-card cursor-pointer" onClick={handleCall}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-foreground mb-1">
                    Phone Number
                  </h3>
                  <p className="text-muted-foreground">
                    +961 70 698 298
                  </p>
                  <p className="text-sm text-gold mt-1">Tap to call</p>
                </div>
              </div>
            </div>

            <div className="luxury-card cursor-pointer" onClick={handleWhatsApp}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-foreground mb-1">
                    WhatsApp
                  </h3>
                  <p className="text-muted-foreground">
                    +961 70 698 298
                  </p>
                  <p className="text-sm text-gold mt-1">Tap to message</p>
                </div>
              </div>
            </div>

            <div className="luxury-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-foreground mb-1">
                    Working Hours
                  </h3>
                  <p className="text-muted-foreground">
                    Monday - Saturday: 9:00 AM - 7:00 PM<br />
                    Sunday: By Appointment
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
