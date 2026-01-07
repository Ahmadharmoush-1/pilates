import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";


const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    "Precision-crafted smile transformations",
    "International recognition & media presence",
    "Premium E-Max & composite veneers",
    "Personalized luxury experience",
    "Trusted by celebrities & public figures",
  ];

  return (
    <section ref={ref} id="about" className="py-20 lg:py-32 bg-background">
      <div className="luxury-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-luxury">
                <img
                  src='/photos/dralaaelcheikh1.png'
                  alt="Dr. Alaa El Cheikh - Cosmetic Dentist"
                  className="w-full h-auto aspect-[3/4] object-cover"
                />
              </div>
              
              {/* Decorative Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-card rounded-2xl p-6 shadow-luxury"
              >
                <div className="text-center">
                  <div className="text-4xl font-serif font-bold text-gold mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gold/5 rounded-full blur-2xl" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="luxury-badge mb-6">About Dr. Alaa</span>
            
            <h2 className="section-title text-foreground mb-6">
              Artistry Meets
              <br />
              <span className="gold-gradient-text">Precision</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Dr. Alaa El Cheikh is a renowned cosmetic and esthetic dentist 
              based in Beirut, specializing in luxury smile transformations. 
              With a meticulous approach to smile design and an unwavering 
              commitment to excellence, Dr. Alaa has become the trusted choice 
              for patients seeking world-class cosmetic dentistry.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At Dr Alaa El Cheikh, every treatment is a work of art—combining 
              cutting-edge technology with bespoke craftsmanship to create smiles 
              that are as unique as the individuals who wear them.
            </p>

            {/* Highlights */}
            <ul className="space-y-4">
              {highlights.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
