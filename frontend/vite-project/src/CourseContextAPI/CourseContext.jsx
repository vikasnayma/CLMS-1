import react , { useContext , createContext , useEffect , useState } from "react";
import axios from 'axios';

const CourseContext = createContext();

export const useCourse = () => {
    return useContext(CourseContext);
}

const CourseProvider = ({children}) => {
    const [courses , setCourses ] = useState([]);
    const [error , setError ] = useState(null);
    const [loading , setLoading ] = useState(false);

    const URL = "http://localhost:8003/api/course";

    const fetchCourses = async () => {
        setLoading(true);
        try {
            const response = await axios.get(URL);
            setCourses(response.data.allCourses);
            setError(null);
        } catch (error) {
            setError(error.message);
        } finally{
            setLoading(false);
        }
    }

    const getCoursebyID = async(id) => {
        setLoading(true);
        try {
            const response = await axios.get(`${URL}/${id}`);
            setCourses(response.data.course);
            console.log(response.data.course);
            setError(null);
        } catch (error) {
            setError(error.message);
        } finally{
            setLoading(false);
        }
    }

    const createCourse = async(course) => {
        try {
           const response =  await axios.post(URL , course);
           setCourses((prev) => [...prev , response.data]);
        } catch (error) {
            setError(error.message);
        }
    }

    const updateCourse = async(id , updatedCourse) => {
        try {
            const response = await axios.put(`${URL}/${id}` , updatedCourse );
            setCourses( (prev) =>
                 prev.map( (course) => (course.id === id ? response.data : course))
        );
        } catch (error) {
            setError(error.message);
        }
    }

    const deleteCourse = async(id) => {
        try {
            const response = await axios.delete(`${URL}/${id}`);
            setCourses( (prev) => 
                prev.filter((course) => ( course.id !== id))
            );
        } catch (error) {
            setError(error.message);
        }
    }
    useEffect (() => {
        fetchCourses();
    } , []);


return (
    <CourseContext.Provider
      value={{
        courses,
        loading,
        error,
        fetchCourses,
        getCoursebyID,
        createCourse,
        updateCourse,
        deleteCourse,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;