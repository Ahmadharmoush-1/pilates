import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ScheduleSection = () => {
  const [selectedDay, setSelectedDay] = useState(1); // Monday

  const days = [
    { id: 0, name: 'Sun', date: '10' },
    { id: 1, name: 'Mon', date: '11' },
    { id: 2, name: 'Tue', date: '12' },
    { id: 3, name: 'Wed', date: '13' },
    { id: 4, name: 'Thu', date: '14' },
    { id: 5, name: 'Fri', date: '15' },
    { id: 6, name: 'Sat', date: '16' },
  ];

  const scheduleData: Record<number, Array<{ time: string; class: string; spots: number }>> = {
    1: [
      { time: '9:00 AM', class: 'Beginners Pilates', spots: 5 },
      { time: '2:00 PM', class: 'Active Over Pilates', spots: 3 },
    ],
    2: [
      { time: '10:30 AM', class: 'Open Level Pilates', spots: 4 },
    ],
    3: [
      { time: '9:00 AM', class: 'Beginners Pilates', spots: 6 },
      { time: '2:00 PM', class: 'Active Over Pilates', spots: 2 },
    ],
    4: [
      { time: '10:30 AM', class: 'Open Level Pilates', spots: 5 },
      { time: '6:00 PM', class: 'Boxilates', spots: 7 },
    ],
    5: [
      { time: '9:00 AM', class: 'Beginners Pilates', spots: 4 },
    ],
    6: [
      { time: '10:30 AM', class: 'Open Level Pilates', spots: 3 },
      { time: '6:00 PM', class: 'Boxilates', spots: 5 },
    ],
  };

  const currentSchedule = scheduleData[selectedDay] || [];

  return (
    <section id="schedule" className="section-padding bg-background">
      <div className="container-custom max-w-5xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4"
            initial={{ letterSpacing: '0.1em', opacity: 0 }}
            whileInView={{ letterSpacing: '0em', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Weekly Schedule
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Select a day to view available classes
          </motion.p>
        </motion.div>

        {/* Day Selector */}
        <motion.div
          className="flex justify-center gap-2 md:gap-4 mb-12 overflow-x-auto pb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {days.map((day, index) => (
            <motion.button
              key={day.id}
              onClick={() => setSelectedDay(day.id)}
              className={cn(
                'flex flex-col items-center justify-center min-w-[70px] md:min-w-[90px] py-4 px-3 rounded-2xl transition-all duration-300',
                selectedDay === day.id
                  ? 'bg-sage text-sage-foreground shadow-lg'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm font-medium">{day.name}</span>
              <span className="text-2xl font-bold mt-1">{day.date}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Classes for Selected Day */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDay}
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            {currentSchedule.length > 0 ? (
              currentSchedule.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-md group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    y: -4,
                    boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.12)'
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <motion.span
                          className="text-lg font-bold text-sage"
                          whileHover={{ scale: 1.05 }}
                        >
                          {item.time}
                        </motion.span>
                        <motion.span
                          className="text-2xl font-serif font-semibold text-card-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                        >
                          {item.class}
                        </motion.span>
                      </div>
                      <motion.p
                        className="text-sm text-muted-foreground"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        {item.spots} spots available
                      </motion.p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className="btn-sage button-ripple">Reserve Spot</Button>
                    </motion.div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-xl text-muted-foreground">No classes scheduled for this day</p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ScheduleSection;