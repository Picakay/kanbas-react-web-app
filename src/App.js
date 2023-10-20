import logo from "./logo.svg";
// import './App.css';
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import HelloWorld from "./Labs/a3/HelloWorld";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
function App() {
  const screen = "Labs";
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/"         element={<Navigate to="/Labs"/>}/>
          <Route path="/hello"    element={<HelloWorld/>}/>
          <Route path="/Labs/*"   element={<Labs/>}/>
          <Route path="/Kanbas/*" element={<Kanbas/>}/>
        </Routes>
      </div>
    </HashRouter>
  );
}
export default App;
