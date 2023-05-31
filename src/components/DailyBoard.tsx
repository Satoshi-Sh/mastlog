import React, { useEffect, useState } from "react";
import { DailyData } from "../interfaces/interfaces";
import DayHeader from "../parts/DayHeader";
import TootSec from "../parts/TootSec";
import { Whole } from "../interfaces/interfaces";
import { API_URL } from "../utils/const";
import { DailyProps } from "../interfaces/interfaces";
import { useParams } from "react-router-dom";
const DailyBoard: React.FC<DailyProps> = (props) => {
  const { category } = props;
  let { value } = useParams();

  if (typeof value === "undefined") {
    value = "";
  }
  const [dailyData, setDailyData] = useState<DailyData[]>([]);

  useEffect(() => {
    // Make an HTTP GET request
    fetch(`${API_URL}/${category}/${value}`)
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the received data
        setDailyData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [value]);
  return (
    <div className="daily-div main-content">
      {dailyData.length > 0
        ? dailyData.map((data, index) => {
            return (
              <div key={index}>
                <DayHeader
                  day={data._id.day}
                  dayName={data._id.dayName}
                  count={data.count}
                />
                <div>
                  {data.items.map((item: Whole, index: number) => (
                    <TootSec data={item} key={index} />
                  ))}
                </div>
              </div>
            );
          })
        : "Loading..."}
    </div>
  );
};
export default DailyBoard;
