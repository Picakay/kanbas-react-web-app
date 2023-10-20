import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./ModuleList.css";
import {FaEllipsisVertical} from "react-icons/fa6";


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;

  return (
    <div className="module-list-container">
      <div className="button-container">

        <button className="button btn btn-light">Collapse All</button>
        <button className="button btn btn-light">View Progress</button>
        <button className="button btn btn-light dropdown">
          <i className="fa-regular fa-square-check" style={{ color: "green" }}></i>
          Publish All
        </button>
        <button className="button btn btn-danger">+ Module</button>
        <button className="button btn btn-light">
        <FaEllipsisVertical />
        </button>

      </div>

      <div className="lists-container">
        <ul className="list-group">
          {modules
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <li key={index} className="list-group-item">
                <h3>{module.name}</h3>
                <p>{module.description}</p>
                {module.lessons && (
                  <ul className="list-group">
                    {module.lessons.map((lesson, index) => (
                      <li key={index} className="list-group-item">
                        <h4>{lesson.name}</h4>
                        <p>{lesson.description}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
        </ul>

        <ul className="list-group">
        <div className="row">
            
  <div className="col-2 bg-primary-subtle">
    <div className="d-none d-lg-block">
      <button type="button" className="btn btn-light">
        <i className="fa-regular fa-ban"></i>UnPublish
      </button>
      <button type="button" className="btn btn-success">
        <i className="fa-regular fa-square-check" style={{ color: "white" }}></i>Publish
      </button>
      <ul className="list-group">
        <li className="list-group-item list-group-item-secondary">
          <i className="fa-solid fa-file-import"></i>Import Existing Content
        </li>
      </ul>
      <h3>To Do</h3>
      <hr />
      <div style={{ color: "red" }}>
        <i className="fa-solid fa-circle-exclamation"></i>Grade 1 - ENV + HTML
      </div>
      <div>100 points Sep 18 at 11:59 pm</div>
      <h3>Coming Up</h3>
      <div>View Calendar</div>
      <div style={{ color: "red" }}>
        <i className="fa-solid fa-calendar-days" style={{ color: "black" }}></i>Lecture
      </div>
    </div>
  </div>
</div>

        </ul>
      </div>
    </div>
  );
}

export default ModuleList;