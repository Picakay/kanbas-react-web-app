import logo from "./logo.svg";
// import './App.css';
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import HelloWorld from "./Labs/a3/HelloWorld";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import Project from "./project";
// import Assignment3 from  "./Labs/a3/";
function App() {
  const screen = "Labs";
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/"    element={<Navigate to="project"/>}/>
          <Route path="/Project/*"  element={<Project />}/>
          <Route path="/hello"    element={<HelloWorld/>}/>
          <Route path="/Labs/*"   element={<Labs/>}/>
          <Route path="/Kanbas/*" element={<Kanbas/>}/>
          {/* <Route path="/a3" element={<Assignment3/>}/> */}
        </Routes>
      </div>
    </HashRouter>
  );
}
export default App;
