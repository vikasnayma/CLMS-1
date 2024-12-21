import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCourse } from '../../CourseContextAPI/CourseContext';

const Courses = () => {
  const { courses, fetchCourses } = useCourse();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses();
  }, []);

  if (!Array.isArray(courses) || courses.length === 0) {
    return <p>No courses available</p>;
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course._id}
            className="border rounded-lg shadow-lg p-4 bg-white hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <button
              onClick={() => navigate(`/course/${course._id}`)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Explore
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;

