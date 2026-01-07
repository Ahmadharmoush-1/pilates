import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Shield, Gem, Heart, Star, Globe } from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "International Recognition",
    description: "Featured on MTV and Miss Europe 2024",
  },
  {
    icon: Award,
    title: "Advanced Techniques",
    description: "Cutting-edge esthetic procedures",
  },
  {
    icon: Gem,
    title: "Premium Materials",
    description: "Only the finest E-Max and composites",
  },
  {
    icon: Heart,
    title: "Calm Environment",
    description: "Luxury clinic with serene atmosphere",
  },
  {
    icon: Star,
    title: "Trusted by Celebrities",
    description: "Preferred dentist for public figures",
  },
  {
    icon: Shield,
    title: "Precision Guaranteed",
    description: "Meticulous attention to every detail",
  },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-charcoal text-ivory">
      <div className="luxury-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gold/20 text-gold border border-gold/30 mb-4">
            Why Choose Us
          </span>
          <h2 className="section-title text-ivory mt-4">
            Why Choose <span className="gold-gradient-text">Dr. Alaa</span>
          </h2>
          <p className="text-lg md:text-xl text-ivory/70 font-light max-w-2xl mx-auto mt-4">
            Experience the difference of world-class cosmetic dentistry in a 
            luxurious, caring environment.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group p-6 md:p-8 rounded-2xl bg-ivory/5 border border-ivory/10 hover:border-gold/30 hover:bg-ivory/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-serif font-medium text-ivory mb-3">
                {benefit.title}
              </h3>
              <p className="text-ivory/60 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
