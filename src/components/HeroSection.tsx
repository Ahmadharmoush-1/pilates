import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import heroImage from '@/assets/hero-studio.jpg';
import { useRef } from 'react';

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const features = [
    '9 Reformer Beds',
    'Beautiful views',
    'Sparkling personalities :)',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section 
      ref={ref}
      id="home" 
      className="section-padding bg-background overflow-hidden relative"
    >
      <motion.div 
        className="container-custom"
        style={{ opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image - First on mobile, left on desktop */}
          <motion.div
            className="order-1 lg:order-1"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
          >
            <div className="relative group">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-br from-sage/20 to-peach/20 rounded-3xl blur-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.img
                src={heroImage}
                alt="Free Flow Pilates Studio"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
                style={{ y }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            </div>
          </motion.div>

          {/* Content - Second on mobile, right on desktop */}
          <motion.div
            className="order-2 lg:order-2 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-4">
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight"
              >
                Pilates Classes for all bodies!
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-muted-foreground max-w-lg"
              >
                We are a boutique Pilates studio that focuses on creating a warm, 
                welcoming, and safe space for all bodies.
              </motion.p>
            </div>

            <motion.ul className="space-y-4" variants={containerVariants}>
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-6 h-6 rounded-full bg-sage/20 flex items-center justify-center"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Check className="w-4 h-4 text-sage" />
                  </motion.div>
                  <span className="text-lg text-foreground font-medium">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button className="btn-sage button-ripple text-lg px-10 py-6 pulse-subtle" size="lg">
                  Book a Class
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;