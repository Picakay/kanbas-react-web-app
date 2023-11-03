import React, { useState } from "react";

function ObjectState() {
    const [course, setCourse] =useState({
        title: "React",
        modules: 5,
        isPublished: true,
        stratDate: new Date(),
    });
    // const handleTitleChange = (event) =>{
    //     setCourse({...course, title:event.target.value});
    // };
    // const handleModulesChange = (event) =>{
    //     setCourse({...course, modules:event.target.value});
    // };
    // const handlePublishedChange = (event) =>{
    //     setCourse({...course, isPublished:event.target.checked});
    // };

    return(
        <div>
            <h2>Object State</h2>
            <input 
            value={course.title} 
            onChange={(e) => setCourse({ ...course, title:e.target.value})} 
            className="form-control"
            />
            <input 
            value={course.modules} 
            // onChange={handleModulesChange} 
            onChange={(e) => setCourse({ ...course, modules:e.target.value})} 
            className="form-control"
            />
            <pre>{JSON.stringify(course, null, 2)}</pre>
        </div>
    );
}

export default ObjectState;