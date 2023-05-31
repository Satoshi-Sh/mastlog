import "./SideBox.css";
import { SideBoxProps } from "../interfaces/interfaces";
import { API_URL } from "../utils/const";
import { SideBoxInterface } from "../interfaces/interfaces";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SideBox: React.FC<SideBoxProps> = (props) => {
  const { title } = props;
  const [data, setData] = useState<SideBoxInterface[]>([]);
  useEffect(() => {
    // Make an HTTP GET request
    fetch(`${API_URL}/${title.toLowerCase()}`)
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
      <h3>{title}</h3>
      <div className="rows">
        {data.map((d, index) => {
          return (
            <div className="row" key={index}>
              <div className="row-header">
                &#9742;
                <Link to={`/friends/${d._id}`}>@{d._id}</Link>
              </div>
              <span>{d.count}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBox;
