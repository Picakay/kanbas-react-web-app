// function Lab5(){
//     return <h2>Lab 5</h2>;
// }

// export default Lab5;

import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays
 from "./WorkingWithArrays";
function Assignment5() {
    return (
      <div>
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a href="http://localhost:4000/a5/welcome"
             className="list-group-item">
            Welcome
          </a>
        </div>
        <EncodingParametersInURLs />
        <WorkingWithObjects />
        <WorkingWithArrays />
      </div>
    );
  }
  export default Assignment5;