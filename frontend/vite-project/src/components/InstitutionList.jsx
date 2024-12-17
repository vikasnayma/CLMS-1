import React from "react";
import InstitutionCard from "./InstitutionCard";

const InstitutionList = () => {
  const institutions = [
    {
      id: 1,
      image: "https://via.placeholder.com/300x200?text=Institution+1",
      name: "Harvard University",
      description: "An Ivy League institution known for its excellence in education and research.",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300x200?text=Institution+2",
      name: "Stanford University",
      description: "A prestigious university renowned for its cutting-edge research and innovation.",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300x200?text=Institution+3",
      name: "MIT",
      description: "World-class institution specializing in science, engineering, and technology.",
    },
  ];

  return (
    <div className="pt-4 pl-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {institutions.map((institution) => (
        <InstitutionCard
          key={institution.id}
          image={institution.image}
          name={institution.name}
          description={institution.description}
        />
      ))}
    </div>
  );
};

export default InstitutionList;
