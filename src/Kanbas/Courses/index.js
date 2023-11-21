import { useLocation, Navigate, Route, Routes, useParams } from "react-router";
import React from "react";
import db from "../Database";
// import JsonPre from "../../Labs/a3/JsonPre";
import CourseNavigation from "./CourseNavigation";
import "./index.css";
import { FaBars} from "react-icons/fa";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { useState, useEffect } from "react";
import axios from "axios";


function Courses({  }){
    const {courseId} = useParams();
    const URL = "http://localhost:4000/api/courses";
    const [course, setCourse] = useState({});
    const findCourseById = async (courseId) => {
      const response = await axios.get(
        `${URL}/${courseId}`
      );
      setCourse(response.data);
    };
  
    // const course = courses.find((course) => course._id === courseId);
    const location = useLocation();
    const currentPath = location.pathname.split("/").pop(); 
    useEffect(() => {
      findCourseById(courseId);
    }, [courseId]);
  
    return(
        <div className="course-container">
            {/* <h1 style={{ color: "red" }}>
            <FaBars style={{ marginRight: "10px" }} /> {course.number}
                </h1>
             */}
            
            <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#" style={{ color: "red", textDecoration: "none" }}>
              <i className="fa fa-list" style={{ color: "red" }}>
              <FaBars style={{ marginRight: "10px" }} />
                {course.number}
              </i>
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {currentPath === "course" ? "Course" : currentPath}
          </li>
        </ol>
      </nav>
            
            
            <hr />
            <CourseNavigation />  
            {/* <JsonPre json={course} /> */}
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
                   element={<AssignmentEditor/>}/>
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>

        </div>
    )
}

export default Courses;