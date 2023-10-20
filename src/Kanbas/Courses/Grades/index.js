import db from "../../Database";
import { useParams } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import {BsFillGearFill} from "react-icons/bs";
function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
        <div className="d-flex justify-content-end">
        <button className="btn btn-light mx-2">
          <i className="fa-solid fa-file-import"></i> Import
        </button>
        <Dropdown>
          <Dropdown.Toggle className="btn btn-light dropdown-toggle mx-2" variant="light" id="dropdown-basic">
            <i className="fa-solid fa-file-export"></i> Export
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Export</Dropdown.Item>
            <Dropdown.Item href="#">UnPublish</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <button className="btn btn-light mx-2">
            <BsFillGearFill />
        </button>
        </div>

        <div>
        <td>Student Names<br />
        <input title="Type the name of the student to search for" placeholder="Search Students" />
      </td>
      <td>Assignment Names<br />
        <input title="Type the assignment to search for" placeholder="Search Assignments" />
      </td>
        </div>
        
        <div>
            <button>Apply Filters</button>
        </div>


      <h1>Grades</h1>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td>{user.firstName} {user.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = db.grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
          </tbody></table>
      </div></div>);
}
export default Grades;

