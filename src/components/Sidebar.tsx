import "./Sidebar.css"; // Import CSS file for styling
import SideBox from "../parts/SideBox";
import RecentBox from "../parts/RecentBox";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <SideBox title="Friends" />
      <RecentBox />
    </div>
  );
};

export default Sidebar;
