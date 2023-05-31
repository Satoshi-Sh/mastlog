import "./SideBox.css";
import { HashtagInterface } from "../interfaces/interfaces";
import "./RecentBox.css";
import { API_URL } from "../utils/const";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HashtagBox = () => {
  const [data, setData] = useState<HashtagInterface[]>([]);
  useEffect(() => {
    // Make an HTTP GET request
    fetch(`${API_URL}/hashtags`)
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the received data
        setData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <div className="sidebox">
      <h3>Hashtags</h3>
      <div className="rows">
        {data.map((d, index) => {
          return (
            <div className="row" key={index}>
              <div className="row-header">
                <Link to={`/hashtags/${d._id}`}>#{d._id}</Link>
              </div>
              <span>{d.count}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HashtagBox;
