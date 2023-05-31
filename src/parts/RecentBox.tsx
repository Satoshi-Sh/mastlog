import "./SideBox.css";
import { RecentInterface } from "../interfaces/interfaces";
import { API_URL } from "../utils/const";
import React, { useEffect, useState } from "react";
import { dayArr } from "./DayHeader";

const RecentBox = () => {
  const [data, setData] = useState<RecentInterface[]>([]);
  useEffect(() => {
    // Make an HTTP GET request
    fetch(`${API_URL}/recent`)
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
      <h3>Recent</h3>
      <div className="rows">
        {data.map((d, index) => {
          const date: string = d._id.day;
          const name: string = dayArr[d._id.dayName - 1];
          return (
            <div className="row" key={index}>
              <div className="row-header">
                {date} {name}
              </div>
              <span>{d.count}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentBox;
