import React, { useEffect, useState } from "react";
import { DailyData } from "../interfaces/interfaces";
import DayHeader from "../parts/DayHeader";
import TootSec from "../parts/TootSec";
import { Whole } from "../interfaces/interfaces";

const DailyBoard = () => {
  const [dailyData, setDailyData] = useState<DailyData[]>([]);

  useEffect(() => {
    // Make an HTTP GET request
    fetch("http://localhost:3000/api/toots")
      .then((response) => response.json())
      .then((data) => {
        console.log(data[1].items[0]);
        // Update the state with the received data
        setDailyData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
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
