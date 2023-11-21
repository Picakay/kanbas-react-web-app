import KanbasNavigation from "./KanbasNavigation";
import { Route,Routes, Navigate} from "react-router";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Calendar from "./Calendar";
import db from "./Database";
import {useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

function Kanbas() {
  const URL = "http://localhost:4000/api/courses";
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
    // const promise = axios.get(URL);
    // promise.then((response) => {
    //   setCourse(response.data);
    // })
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  // const [courses, setCourses] = useState(db.courses);
  const [courses, setCourses] = useState([]); 
  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse =  async () => {
    const response = await axios.post(URL, course);
    setCourses([response.data,...courses, 
      // { ...course, _id: new Date().getTime().toString() }
    ]);
  };


  const deleteCourse = async (courseId) => {
    const response = await axios.delete(
      `${URL}/${courseId}`
    );
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };
  const updateCourse = async () => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
    setCourse({ name: "" });
  };

  





    return (
      <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div>
        <Routes>
        <Route path="/" element={<Navigate to="Dashboard" />} />
        <Route path="Account" element={<Account />} />
        <Route path="Dashboard" element={            <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>} />
        <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
        <Route path="Calendar" element={<Calendar />} />
        </Routes>
        </div>
      </div>
      </Provider>
    );
  }
  export default Kanbas;