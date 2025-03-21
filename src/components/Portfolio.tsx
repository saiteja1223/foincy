import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import room1 from '../Asserts/livingRoom1.jpg';
import { Users, CalendarCheck, ShoppingCart, Hammer, Home, ArrowRight,ArrowDown,ArrowDownCircle } from "lucide-react";


const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Modern Minimalist Living Room',
      category: 'residential',
      image: room1,
    },
    {
      id: 2,
      title: 'Luxury Office Space',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1000',
    },
    {
      id: 3,
      title: 'Contemporary Kitchen Design',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=1000',
    },
    {
      id: 4,
      title: 'Boutique Hotel Lobby',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=1000',
    },
    {
      id: 5,
      title: 'Urban Loft Bedroom',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1000',
    },
    {
      id: 6,
      title: 'Restaurant Interior',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1537726235470-8504e3beef77?auto=format&fit=crop&q=80&w=1000',
    },
  ];

  const categories = ['all', 'residential', 'commercial'];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

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
    <>
    <motion.div
      ref={ref}
      className="container mx-auto px-4"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6">Our Portfolio</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Explore our collection of thoughtfully designed spaces that showcase our commitment
          to excellence and attention to detail.
        </p>

        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full capitalize ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              } transition-colors duration-200`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="group relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center text-white p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="capitalize">{project.category}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
   
    </>
  );
};

export default Portfolio;