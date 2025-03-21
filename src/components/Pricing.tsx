import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const plans = [
    {
      title: 'Basic',
      price: 1999,
      features: [
        'Initial consultation',
        'Space planning',
        'Color scheme selection',
        'Basic 3D visualization',
        'Shopping list',
      ],
      recommended: false,
    },
    {
      title: 'Premium',
      price: 3999,
      features: [
        'Everything in Basic',
        'Detailed 3D renderings',
        'Custom furniture design',
        'Material selection',
        'Lighting plan',
        'Project management',
      ],
      recommended: true,
    },
    {
      title: 'Luxury',
      price: 7999,
      features: [
        'Everything in Premium',
        'Full-service design',
        'Custom artwork selection',
        'Smart home integration',
        'Landscape design',
        'Unlimited revisions',
        '24/7 support',
      ],
      recommended: false,
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
        <h2 className="text-4xl font-bold mb-6">Pricing Plans</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose the perfect package that suits your needs and budget. All plans include
          our signature attention to detail and professional service.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`rounded-lg overflow-hidden ${
              plan.recommended
                ? 'bg-blue-600 text-white transform scale-105'
                : 'bg-white'
            }`}
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-sm ml-2">/ project</span>
              </div>
              <ul className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="w-5 h-5 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full py-3 px-6 rounded-full font-semibold transition-colors duration-200 ${
                  plan.recommended
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Get Started
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Pricing;