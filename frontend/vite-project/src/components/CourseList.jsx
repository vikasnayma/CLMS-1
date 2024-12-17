import React from "react";
import CourseCard from "./CourseCard";

const CourseList = () => {
  const courses = [
    {
      id: 1,
      image: "https://via.placeholder.com/300x200?text=Institution+1",
      name: "Full Stack Web Developement",
      institute: "Coding Ninja",
      description: "An Ivy League institution known for its excellence in education and research.",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300x200?text=Institution+2",
      name: "Devops AWS",
      institute: "Udemy",
      description: "A prestigious university renowned for its cutting-edge research and innovation.",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300x200?text=Institution+3",
      name: "DSA",
      institute: "TakeuForward",
      description: "World-class institution specializing in science, engineering, and technology.",
    },
  ];

  return (
    <div className="pt-4 pl-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          image={course.image}
          name={course.name}
          institute={course.institute}
          description={course.description}
        />
      ))}
    </div>
  );
};

export default CourseList;
