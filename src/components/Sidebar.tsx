import "./Sidebar.css"; // Import CSS file for styling
import SideBox from "../parts/SideBox";
import RecentBox from "../parts/RecentBox";
import HashtagBox from "../parts/HashtagBox";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <HashtagBox />
      <RecentBox />
      <SideBox title="Friends" />
    </div>
  );
};

export default Sidebar;
