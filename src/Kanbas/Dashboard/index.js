import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";

function Dashboard() {
  const courses = db.courses;

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <hr />
      <h3>Public Courses ({courses.length})</h3>
      <hr />
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 wd-dashboard-grid">
        {courses.map((course) => (
          <div key={course._id} className="col">
            <div className="card h-100">
              <img src="/images/blue.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <p className="card-text">
                  CS4550.12631.202410<br />
                  202410 Fall
                  </p>
                <Link to={`/Kanbas/Courses/${course._id}`} className="btn btn-primary">
                  View Course
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;



