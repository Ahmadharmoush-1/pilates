import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";

const FloatingButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/96170698298?text=Hello%20Dr.%20Alaa,%20I%20would%20like%20to%20book%20an%20appointment.",
      "_blank"
    );
  };

  const handleCall = () => {
    window.location.href = "tel:+96170698298";
  };

  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile Sticky Book Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ivory via-ivory to-transparent lg:hidden z-40">
        <button onClick={scrollToBooking} className="w-full luxury-button py-4">
          <Phone className="w-5 h-5 mr-2" />
          Book Your Appointment
        </button>
      </div>

      {/* Floating WhatsApp Button (Desktop) */}
      <div className="fixed bottom-6 right-6 z-50 hidden lg:block">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-20 right-0 bg-card rounded-2xl shadow-luxury p-4 min-w-[200px]"
            >
              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-colors text-left"
              >
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm">WhatsApp</div>
                  <div className="text-xs text-muted-foreground">Message us</div>
                </div>
              </button>
              <button
                onClick={handleCall}
                className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-colors text-left mt-1"
              >
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                  <Phone className="w-5 h-5 text-ivory" />
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm">Call Us</div>
                  <div className="text-xs text-muted-foreground">+961 70 698 298</div>
                </div>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-luxury hover:bg-green-600 transition-colors"
        >
          {isExpanded ? (
            <X className="w-7 h-7 text-white" />
          ) : (
            <MessageCircle className="w-7 h-7 text-white" />
          )}
        </motion.button>
      </div>

      {/* Mobile WhatsApp Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        onClick={handleWhatsApp}
        className="fixed bottom-24 right-4 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-luxury hover:bg-green-600 transition-colors lg:hidden z-40"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.button>
    </>
  );
};

export default FloatingButtons;
