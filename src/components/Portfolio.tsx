import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import room1 from "../Asserts/livingRoom1.jpg";
import kitchen1 from "../Asserts/kitchen1.jpg";
import kitchen2 from "../Asserts/kitchen2.jpg";
import kitchen3 from "../Asserts/kitchen3.jpg";
import living1 from "../Asserts/living1.jpg";
import living2 from "../Asserts/living2.jpg";
import living3 from "../Asserts/living3.jpg";
import hotel1 from "../Asserts/hotel1.jpg";
import hotel2 from "../Asserts/hotel2.jpg";
import office from "../Asserts/office.jpg";
import office1 from "../Asserts/office1.jpg";
const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Modern Minimalist Living Room",
      category: "residential",
      image: room1,
      gallery: [
       living1,living2,living3],
    },
    {
      id: 2,
      title: "Luxury Office Space",
      category: "commercial",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
      gallery: [ office,office1
       
      ],
    },
    {
      id: 3,
      title: "Contemporary Kitchen Design",
      category: "residential",
      image:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba",
      gallery:  [
        kitchen1,kitchen2,kitchen3
        ],
    },
    {
      id: 4,
      title: "Boutique Hotel Lobby",
      category: "commercial",
      image:
        "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f",
      gallery: [
       hotel1,hotel2,
      ],
    },
  ];

  const categories = ["all", "residential", "commercial"];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <>
      <motion.div
        ref={ref}
        className="container mx-auto px-4"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Our Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our collection of thoughtfully designed spaces.
          </p>

          {/* Category Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full capitalize ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                } transition-colors duration-200`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <div className="text-center text-white p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="capitalize">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg max-w-3xl w-full relative">
            <button
              className="absolute top-4 right-4 text-xl text-gray-700 hover:text-black"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>
            <h3 className="text-2xl font-semibold mb-4">
              {selectedProject.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedProject.gallery.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Gallery"
                  className="w-full h-40 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
