import React from "react";

const people = [
  {
    id: 1,
    name: "John Doe",
    phone: "+1 234 567 890",
    location: "New York, USA",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    phone: "+44 789 654 321",
    location: "London, UK",
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Alex Johnson",
    phone: "+91 98765 43210",
    location: "Mumbai, India",
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Emily Brown",
    phone: "+61 412 345 678",
    location: "Sydney, Australia",
    photo: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const PeopleInfo = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Meet the Founders</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
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
