import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Clock, Lightbulb } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4"
    >
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-6">About FoincyInteriors</h2>
        <p className="text-lg text-gray-600 mb-8">
        Since inception, it was founded by four friends with an ambition of turning every home into beautiful spaces and makes every memory in it to be cherished through every nook and corner. We strive to elevate your very emotion and reflect through our personalised and exclusive designs.  

Foincy Interiors is the pioneer in rendering world class projects and impressive homes that speaks volumes. Small or big, narrow or vast, we serve with best designs that can give an all new look to your living spaces.  


        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <Award className="w-12 h-12 mx-auto mb-4 text-blue-600" />
          <h3 className="text-xl font-semibold mb-2">Award Winning</h3>
          <p className="text-gray-600">Recognized for excellence in interior design</p>
        </div>

        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
          <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
          <p className="text-gray-600">Skilled professionals with years of experience</p>
        </div>

        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <Clock className="w-12 h-12 mx-auto mb-4 text-blue-600" />
          <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
          <p className="text-gray-600">Projects completed on schedule, every time</p>
        </div>

        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <Lightbulb className="w-12 h-12 mx-auto mb-4 text-blue-600" />
          <h3 className="text-xl font-semibold mb-2">Innovative Design</h3>
          <p className="text-gray-600">Creative solutions for modern living</p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;