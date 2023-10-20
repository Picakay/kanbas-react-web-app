import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import {FaEllipsisVertical} from "react-icons/fa6";



function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
        <div className="d-flex justify-content-end">
        <button className="button btn btn-success">Published</button>
        <button className="button btn btn-light">
            <FaEllipsisVertical />
        </button> 
  </div>
  <br />
      <h2>Assignment Name</h2>
      <input value={assignment.title}
             className="form-control mb-2" />
        <div className="d-flex justify-content-end">
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-light">
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-danger me-2">
        Save
      </button></div> 
      <br />
    </div>
  );
}


export default AssignmentEditor;