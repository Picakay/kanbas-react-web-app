import { Link, useLocation } from "react-router-dom";
import {BiUserCircle} from "react-icons/bi";
import {RiDashboard3Fill} from "react-icons/ri";
import {FaBook} from "react-icons/fa";
import {BsFillCalendar2WeekFill} from "react-icons/bs";
import "./index.css";

function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar"];

    const linkToIconMap = {
        Account: <BiUserCircle className="custom-icon"/>,
        Dashboard: <RiDashboard3Fill className="wd-icon"/>,
        Courses: <FaBook className="wd-icon"/>,
        Calendar: <BsFillCalendar2WeekFill className="wd-icon"/>,
    }
    const { pathname } = useLocation();
    return (
      <div className="list-group wd-kanbas-navigation ">

        <img src="/neuicon.png" alt="Icon" className="icon-image" />

        {links.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/${link}`}
            className={`list-group-item ${pathname.includes(link) && "active"}`}>
            {linkToIconMap[link]}
            {link}
          </Link>
        ))}
      </div>
    );
  }
  export default KanbasNavigation;
  