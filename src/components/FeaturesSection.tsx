import { motion } from 'framer-motion';
import { Users, Award, Package, Calendar } from 'lucide-react';
import WaveDivider from './WaveDivider';

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: 'All levels welcome',
      description: 'Beginners and beyond',
    },
    {
      icon: Award,
      title: 'Small Class Sizes',
      description: 'Personalized attention',
    },
    {
      icon: Package,
      title: 'No fancy equipment needed',
      description: 'Bring socks!',
    },
    {
      icon: Calendar,
      title: 'Book online',
      description: "It's that easy!",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section className="relative bg-peach section-padding">
      <WaveDivider position="top" color="hsl(var(--peach))" />
      
      <div className="container-custom">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center space-y-4 group"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex justify-center">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center relative overflow-hidden"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-sage/10"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 2, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <Icon className="w-8 h-8 text-sage relative z-10" strokeWidth={1.5} />
                  </motion.div>
                </div>
                <motion.h3
                  className="text-xl font-serif font-semibold text-peach-foreground"
                  initial={{ letterSpacing: '0.05em' }}
                  whileInView={{ letterSpacing: '0em' }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  {feature.title}
                </motion.h3>
                <p className="text-peach-foreground/70">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;