import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Tv, Crown, Award, Star } from "lucide-react";
// import missEuropeImage from "@/assets/miss-europe-event.jpg";

const AuthoritySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const badges = [
    { icon: Tv, label: "MTV Representative" },
    { icon: Crown, label: "Miss Europe 2024 Jury Member" },
    { icon: Award, label: "Cosmetic & Esthetic Dentist" },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-secondary">
      <div className="luxury-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="luxury-badge mb-4">
            <Star className="w-4 h-4 mr-2" />
            International Recognition
          </span>
          <h2 className="section-title text-foreground mt-4">
            Internationally Recognized
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Miss Europe 2024 & MTV
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Video/Image Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-luxury">
            <video
  src="/videos/mtv.mp4"
  className="w-full h-auto aspect-[4/3] object-cover rounded-3xl"
  autoPlay
  muted
  loop
  playsInline
  controls={false}
/>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-charcoal/20 group cursor-pointer hover:bg-charcoal/30 transition-colors">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 rounded-full bg-gold/90 backdrop-blur-sm flex items-center justify-center shadow-gold"
                >
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-ivory border-b-[12px] border-b-transparent ml-1" />
                </motion.div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
            </div>
          </motion.div>

          {/* Content Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-6">
                A Vision of Excellence in Cosmetic Dentistry
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Dr. Alaa El Cheikh proudly represented cosmetic dentistry on MTV as 
                a jury member for Miss Europe 2024. The official visit to our clinic 
                was organized by Miss Europe 2024, showcasing advanced smile design, 
                composite veneers, and E-Max treatments at our Dr Alaa El Cheikh 
                in Badaro.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-4">
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="luxury-badge"
                >
                  <badge.icon className="w-4 h-4 mr-2" />
                  {badge.label}
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="border-l-4 border-gold pl-6 py-2"
            >
              <p className="text-lg italic text-muted-foreground">
                "Creating luxury smiles that radiate confidence on the world stage."
              </p>
              <footer className="mt-2 text-sm font-medium text-foreground">
                — Dr. Alaa El Cheikh
              </footer>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
