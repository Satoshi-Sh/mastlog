import DailyBoard from "./DailyBoard";
import Sidebar from "./Sidebar";
import "./MainContent.css";
import { useState, useEffect } from "react";
const MainContent = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={`container ${isMobile ? "mobile" : ""}`}>
      <DailyBoard />
      <Sidebar />
    </div>
  );
};

export default MainContent;
