import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import WaveDivider from './WaveDivider';
import beginnersImage from '@/assets/class-beginners.jpg';
import openLevelImage from '@/assets/class-open-level.jpg';
import activeOverImage from '@/assets/class-active-over.jpg';
import boxilatesImage from '@/assets/class-boxilates.jpg';

const ClassTypesSection = () => {
  const classes = [
    {
      name: 'Beginners Pilates',
      image: beginnersImage,
      description: 'Perfect for those new to Pilates. Learn the fundamentals in a supportive environment.',
      schedule: 'Mon, Wed, Fri',
      time: '9:00 AM',
      duration: '50 min',
      price: '$30',
    },
    {
      name: 'Open Level Pilates',
      image: openLevelImage,
      description: 'For all levels. Challenge yourself with varied sequences and creative flows.',
      schedule: 'Tue, Thu, Sat',
      time: '10:30 AM',
      duration: '50 min',
      price: '$35',
    },
    {
      name: 'Active Over Pilates',
      image: activeOverImage,
      description: 'Designed for active adults 50+. Focus on mobility, balance, and strength.',
      schedule: 'Mon, Wed',
      time: '2:00 PM',
      duration: '45 min',
      price: '$28',
    },
    {
      name: 'Boxilates',
      image: boxilatesImage,
      description: 'A fusion of boxing and Pilates. High-energy cardio meets core strengthening.',
      schedule: 'Thu, Sat',
      time: '6:00 PM',
      duration: '60 min',
      price: '$40',
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

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section id="classes" className="relative bg-peach section-padding">
      <WaveDivider position="top" color="hsl(var(--peach))" />
      
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-bold text-peach-foreground mb-4"
            initial={{ letterSpacing: '0.1em', opacity: 0 }}
            whileInView={{ letterSpacing: '0em', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Our Classes
          </motion.h2>
          <motion.p
            className="text-xl text-peach-foreground/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Choose the class that fits your goals and schedule
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {classes.map((classItem, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-card rounded-3xl overflow-hidden shadow-lg group"
              whileHover={{ 
                y: -12,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="aspect-square overflow-hidden relative">
                <motion.img
                  src={classItem.image}
                  alt={classItem.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-sage/30 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <motion.div
                className="p-6 space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <h3 className="text-2xl font-serif font-semibold text-card-foreground">
                  {classItem.name}
                </h3>
                <p className="text-card-foreground/70 text-sm leading-relaxed">
                  {classItem.description}
                </p>
                <div className="space-y-2 text-sm text-card-foreground/80">
                  <p>
                    <span className="font-semibold">Schedule:</span> {classItem.schedule}
                  </p>
                  <p>
                    <span className="font-semibold">Time:</span> {classItem.time}
                  </p>
                  <p>
                    <span className="font-semibold">Duration:</span> {classItem.duration}
                  </p>
                  <motion.p
                    className="text-lg font-bold text-sage"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {classItem.price}
                  </motion.p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="btn-sage button-ripple w-full">Book Now</Button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClassTypesSection;