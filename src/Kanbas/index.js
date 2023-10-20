import KanbasNavigation from "./KanbasNavigation";
import { Route,Routes, Navigate} from "react-router";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Calendar from "./Calendar";


function Kanbas() {
    return (
      <div className="d-flex">
        <KanbasNavigation />
        <div>
        <Routes>
        <Route path="/" element={<Navigate to="Dashboard" />} />
        <Route path="Account" element={<Account />} />
        <Route path="Dashboard" element={<Dashboard/>} />
        <Route path="Courses/:courseId/*" element={<Courses />} />
        <Route path="Calendar" element={<Calendar />} />
        </Routes>
        </div>
      </div>
    );
  }
  export default Kanbas;