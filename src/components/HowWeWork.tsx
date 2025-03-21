import React, { useState } from 'react';
import { Home, Palette, ShoppingCart, Truck, Smile } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HowWeWork = () => {
  const [step, setStep] = useState(1);

  const steps = [
    {
      id: 1,
      icon: <Palette className="h-12 w-12 text-white mb-4" />,
      title: "Meet Our Designer",
      description:
        "Get the best designs from the best designers. We have the best designers in town who bring creativity and uniqueness to your spaces.",
      color: "bg-blue-500",
    },
    {
      id: 2,
      icon: <ShoppingCart className="h-12 w-12 text-white mb-4" />,
      title: "Book Foincy",
      description:
        "Book today and avail 10% off. We assist you throughout the process to ensure a seamless experience.",
      color: "bg-green-500",
    },
    {
      id: 3,
      icon: <Home className="h-12 w-12 text-white mb-4" />,
      title: "Place the Order",
      description:
        "Personalize your designs as per your requirements and confirm to proceed. Hurray!",
      color: "bg-purple-500",
    },
    {
      id: 4,
      icon: <Truck className="h-12 w-12 text-white mb-4" />,
      title: "Kick Start Your Home",
      description:
        "Once materials are delivered, start building your dream spaces with our easy and safe installation facilities.",
      color: "bg-yellow-500",
    },
    {
      id: 5,
      icon: <Smile className="h-12 w-12 text-white mb-4" />,
      title: "Voila! Move In",
      description:
        "Say hello to your new world! Create wonderful memories in your dream spaces with your loved ones.",
      color: "bg-pink-500",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
          How We Work
        </h2>

        {/* Step Navigation Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          {steps.map((s) => (
            <button
              key={s.id}
              onClick={() => setStep(s.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                step >= s.id
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Step {s.id}
            </button>
          ))}
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.slice(0, step).map((s) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: s.id * 0.2 }}
              className={`${s.color} p-6 rounded-lg shadow-lg text-white transform hover:scale-105 transition-transform duration-300`}
            >
              <div className="flex justify-center">{s.icon}</div>
              <h3 className="text-xl font-bold text-center mb-2">{s.title}</h3>
              <p className="text-center">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;