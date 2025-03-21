import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Home, Building2, Sofa, PenTool as Tool, PaintBucket, Ruler } from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Home className="w-12 h-12" />,
      title: 'Residential Design',
      description: 'Transform your home into a personalized sanctuary with our expert residential interior design services.',
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Commercial Spaces',
      description: 'Create impressive commercial environments that enhance productivity and reflect your brand identity.',
    },
    {
      icon: <Sofa className="w-12 h-12" />,
      title: 'Custom Furniture',
      description: 'Bespoke furniture solutions tailored to your specific needs and style preferences.',
    },
    {
      icon: <Tool className="w-12 h-12" />,
      title: 'Renovation',
      description: 'Comprehensive renovation services to breathe new life into existing spaces.',
    },
    {
      icon: <PaintBucket className="w-12 h-12" />,
      title: 'Color Consultation',
      description: 'Expert color schemes that create the perfect atmosphere for your space.',
    },
    {
      icon: <Ruler className="w-12 h-12" />,
      title: 'Space Planning',
      description: 'Optimize your space utilization with our professional planning services.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className="container mx-auto px-4"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6">Our Services</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We offer a comprehensive range of interior design services to meet all your needs,
          from concept to completion.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-blue-600 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;