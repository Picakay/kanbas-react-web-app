import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
          <input type="text" placeholder="search" />
      </div>
      <div>
          <button className="button btn btn-light">+ Group</button>
          <button className="button btn btn-danger">+ Assignment</button>
          <br />
        </div>
      
      </div>
      
      <div className="list-group">
      <h2 style={{ backgroundColor: 'lightgray' }}>Assignments for course {courseId}</h2>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item">
            {assignment.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;

