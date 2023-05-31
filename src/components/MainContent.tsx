import DailyBoard from "./DailyBoard";
import Sidebar from "./Sidebar";
import "./MainContent.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      <Router>
        <Routes>
          <Route path="/" element={<DailyBoard category="toots" />} />
          <Route
            path="/hashtags/:value"
            element={<DailyBoard category="hashtags" />}
          />
          <Route path="/date/:value" element={<DailyBoard category="date" />} />
          <Route
            path="/friends/:value"
            element={<DailyBoard category="friends" />}
          />
        </Routes>
        <Sidebar />
      </Router>
    </div>
  );
};

export default MainContent;
