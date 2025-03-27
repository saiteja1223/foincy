import React from "react";
import profile1 from '../Asserts/profile1.jpg'
import profile2 from '../Asserts/profile2.jpg'
import profile3 from '../Asserts/profile3.jpg'
import profile4 from '../Asserts/profile4.png'
const people = [
  {
    id: 1,
    name: "Surya Vamshi",
   
    location: "Interior Designer",
    photo:profile1,
  },
  {
    id: 2,
    name: "Rahul Reddy",
   
    location: "Interior Designer",
    photo:profile2,
  },
  {
    id: 3,
    name: "Prasanna Kumar",
 
    location: "Interior Designer",
    photo: profile3
  },
  {
    id: 4,
    name: "Ranadheer ",

    location: "Interior Designer",
    photo: profile4
  },
];

const PeopleInfo = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Meet the Founders</h2>

      {/* For Mobile View - Horizontal Scroll */}
      <div className="md:hidden overflow-x-scroll scroll-smooth flex space-x-4 p-4 no-scrollbar">
        {people.map((person) => (
          <div
            key={person.id}
            className="min-w-[70%] sm:min-w-[80%] lg:w-1/3 bg-white shadow-lg rounded-2xl p-4 flex flex-col items-center text-center transition hover:shadow-xl"
          >
            <img
              src={person.photo}
              alt={person.name}
              className="w-24 h-24 rounded-full mb-3 border-4 border-gray-200"
            />
            <h3 className="text-lg font-semibold">{person.name}</h3>
            <p className="text-gray-500">{person.phone}</p>
            <p className="text-gray-400">{person.location}</p>
          </div>
        ))}
      </div>

      {/* For Desktop View - Grid Layout */}
      <div className="hidden md:grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {people.map((person) => (
          <div
            key={person.id}
            className="bg-white shadow-lg rounded-2xl p-4 flex flex-col items-center text-center transition hover:shadow-xl"
          >
            <img
              src={person.photo}
              alt={person.name}
              className="w-24 h-24 rounded-full mb-3 border-4 border-gray-200"
            />
            <h3 className="text-lg font-semibold">{person.name}</h3>
            <p className="text-gray-500">{person.phone}</p>
            <p className="text-gray-400">{person.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleInfo;
