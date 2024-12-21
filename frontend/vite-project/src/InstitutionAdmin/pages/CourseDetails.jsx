import React, { useEffect, useState } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import { useCourse } from '../../CourseContextAPI/CourseContext';

const CourseDetail = () => {
    const { id } = useParams(); // Extract course ID from URL
    const { getCoursebyID, courses, loading, error } = useCourse(); 
    const navigate = useNavigate();
  
    useEffect(() => {
      getCoursebyID(id); 
    }, [id]);
  
    if (loading) return <p className="text-center text-xl">Loading course details...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;
    if (!courses || !courses.title) return <p className="text-center text-xl">No course details found</p>;
  
    return (
      <div className="max-w-7xl mx-auto p-8 bg-white shadow-lg rounded-lg m-8">
       
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{courses.title}</h1>
  
        
        <p className="text-lg text-gray-600 mb-6">{courses.description}</p>
  
       
        <div className="flex gap-8 text-gray-700 mb-6">
          <p className="text-lg"><strong>Language:</strong> {courses.language}</p>
          <p className="text-lg"><strong>Price:</strong> ${courses.price.toFixed(2)}</p>
          <p className="text-lg"><strong>Subscription Plan:</strong> {courses.subscriptionPlan ? 'Yes' : 'No'}</p>
        </div>
  
       
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Instructors</h2>
          <ul className="list-disc pl-6 text-gray-700">
            {courses.instructors.map((instructor, index) => (
              <li key={index} className="mb-1">Instructor ID: {instructor}</li>
            ))}
          </ul>
        </div>
  
        
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Content</h2>
          <ul className="space-y-4">
            {courses.content.map((item, index) => (
              <li key={index} className="p-4 border rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition">
                <strong>{item.type.charAt(0).toUpperCase() + item.type.slice(1)}:</strong> {item.title}
                {item.url && (
                  <div className="mt-2">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      View Content
                    </a>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
  
       
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Discussion Forum</h2>
          {courses.discussionForum.length > 0 ? (
            courses.discussionForum.map((discussion, index) => (
              <div key={index} className="p-4 mb-4 border rounded-lg bg-gray-50 shadow-sm">
                <p className="text-sm font-semibold text-gray-800">User ID: {discussion.userId}</p>
                <p className="text-gray-700">{discussion.message}</p>
                <p className="text-xs text-gray-500 mt-2">{new Date(discussion.timestamp).toLocaleString()}</p>
                {discussion.replies?.length > 0 && (
                  <div className="mt-4 space-y-2 pl-4 border-l-2 border-gray-300">
                    <h3 className="text-lg font-semibold text-gray-800">Replies:</h3>
                    {discussion.replies.map((reply, idx) => (
                      <div key={idx} className="p-2 mt-2 bg-gray-100 rounded-md">
                        <p className="text-sm text-gray-800">User ID: {reply.userId}</p>
                        <p className="text-gray-700">{reply.message}</p>
                        <p className="text-xs text-gray-500">{new Date(reply.timestamp).toLocaleString()}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500">No discussions available</p>
          )}
        </div>
  

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Students</h2>
          <ul className="list-disc pl-6 text-gray-700">
            {courses.students.map((student, index) => (
              <li key={index} className="mb-1">Student ID: {student.userId}</li>
            ))}
          </ul>
        </div>
  
        
        <button
          onClick={() => navigate('/Courses')}
          className="px-6 mx-4 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all text-lg mt-6"
        >
          Back to Courses
        </button>
        <button
          onClick={() => navigate('/EditCoursepage')}
          className="px-6 mx-4 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all text-lg mt-6"
        >
          Edit Details
        </button>
        <button
          onClick={() => navigate()}
          className="px-6 mx-4 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all text-lg mt-6"
        >
          Delete Course
        </button>
      </div>
    );
  };
  
  export default CourseDetail;