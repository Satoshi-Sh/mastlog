import "./Sidebar.css"; // Import CSS file for styling
import SideBox from "../parts/SideBox";
import RecentBox from "../parts/RecentBox";
import HashtagBox from "../parts/HashtagBox";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link className="home-link" to="/">
        <h2 className="home-link-h">Home</h2>
      </Link>
      <HashtagBox />
      <RecentBox />
      <SideBox title="Friends" />
    </div>
  );
};

export default Sidebar;
