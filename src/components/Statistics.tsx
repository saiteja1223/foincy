import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Statistics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: '105+', label: 'Projects Completed' },
    { value: '8+', label: 'Years Experience' },
    { value: '180+', label: 'Happy Clients' },
    { value: '12', label: 'Design Awards' },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
              {stat.value}
            </div>
            <div className="text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Statistics;