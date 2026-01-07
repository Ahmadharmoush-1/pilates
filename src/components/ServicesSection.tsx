import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Diamond, Crown, Sun, Smile, Heart } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Smile Design",
    description: "Bespoke digital smile planning for your perfect transformation",
  },
  {
    icon: Diamond,
    title: "E-Max Veneers",
    description: "Premium lithium disilicate veneers for natural brilliance",
  },
  {
    icon: Crown,
    title: "Composite Veneers",
    description: "Artistic composite layering for immediate smile enhancement",
  },
  {
    icon: Sun,
    title: "Teeth Whitening",
    description: "Advanced whitening treatments for a radiant, confident smile",
  },
  {
    icon: Smile,
    title: "Hollywood Smile",
    description: "Complete smile makeovers for camera-ready perfection",
  },
  {
    icon: Heart,
    title: "General Dentistry",
    description: "Comprehensive care with the same luxury experience",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="services" className="py-20 lg:py-32 bg-secondary">
      <div className="luxury-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="luxury-badge mb-4">Our Services</span>
          <h2 className="section-title text-foreground mt-4">
            Luxury Dental <span className="gold-gradient-text">Treatments</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Experience world-class cosmetic dentistry with personalized care 
            and premium materials.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group"
            >
              <div className="luxury-card h-full hover-glow">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <service.icon className="w-7 h-7 text-gold" />
                  </div>
                </div>
                <h3 className="text-xl font-serif font-medium text-foreground mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
