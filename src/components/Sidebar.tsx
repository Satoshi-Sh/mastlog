import "./Sidebar.css"; // Import CSS file for styling
import SideBox from "../parts/SideBox";
import RecentBox from "../parts/RecentBox";
import HashtagBox from "../parts/HashtagBox";
import MyCalendar from "../parts/MyCalendar";
import SearchBox from "../parts/SearchBox";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link className="home-link" to="/">
        <h2 className="home-link-h">Home</h2>
      </Link>
      <SearchBox />
      <HashtagBox />
      <RecentBox />
      <SideBox title="Friends" />
      <MyCalendar />
    </div>
  );
};

export default Sidebar;
