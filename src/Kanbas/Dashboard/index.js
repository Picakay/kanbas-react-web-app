// import { React, useState } from "react";
// import { Link } from "react-router-dom";
// import db from "../Database";
// import './index.css';

// function Dashboard({ courses, course, setCourse, addNewCourse,
//   deleteCourse, updateCourse }) {
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <hr />
//       <h3>Public Courses ({courses.length})</h3>
//       <hr />

//       <div className="form-row">
//       <input value={course.name} className="form-control"
//              onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
//       <input value={course.number} className="form-control"
//              onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
//       <input value={course.startDate} className="form-control" type="date"
//              onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
//       <input value={course.endDate} className="form-control" type="date"
//              onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
//       <button onClick={addNewCourse} className="add-button">
//         Add
//       </button>
//       <button onClick={updateCourse} className="update-button">
//         Update
//       </button>
//       </div>

//       <div className="list-group">
//         {courses.map((course) => (
//           <Link key={course._id}
//                 to={`/Kanbas/Courses/${course._id}`}
//                 className="list-group-item">

//             <button
//               onClick={(event) => {
//                 event.preventDefault();
//                 setCourse(course);
//               }} className="edit-button">
//               Edit
//             </button>

//             <button
//               onClick={(event) => {
//                 event.preventDefault();
//                 deleteCourse(course._id);
//               }} className="delete-button">
//               Delete
//             </button>

//             {course.name}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }



// export default Dashboard;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";

function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <h3>Public Courses ({courses.length})</h3>
      <hr />

      <div className="form-row">
        <input
          value={course.name}
          className="form-control"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <input
          value={course.number}
          className="form-control"
          onChange={(e) => setCourse({ ...course, number: e.target.value })}
        />
        <input
          value={course.startDate}
          className="form-control"
          type="date"
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        />
        <input
          value={course.endDate}
          className="form-control"
          type="date"
          onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
        />
        <button onClick={addNewCourse} className="add-button">
          Add
        </button>
        <button onClick={updateCourse} className="update-button">
          Update
        </button>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 wd-dashboard-grid">
        {courses.map((course) => (
          <div key={course._id} className="col">
            <div className="card h-100">
              <img src="/images/blue.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <p className="card-text">
                  {course.number} {course.startDate} - {course.endDate}
                </p>
                <Link to={`/Kanbas/Courses/${course._id}`} className="btn btn-primary">
                  View Course
                </Link>
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                  }}
                  className="btn btn-primary"
                >
                  Edit
                </button>
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(course._id);
                  }}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;


