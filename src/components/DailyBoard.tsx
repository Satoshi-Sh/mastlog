import React, { useEffect, useState } from "react";
import {
  DailyData,
  Whole,
  DailyProps,
  ControlProps,
} from "../interfaces/interfaces";
import "./DailyBoard.css";
import DayHeader from "../parts/DayHeader";
import TootSec from "../parts/TootSec";
import { API_URL } from "../utils/const";
import { useParams, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ControlButtons: React.FC<ControlProps> = (props) => {
  const { hasBefore, hasNext, value, category } = props;

  const navigate = useNavigate();
  if (category !== "toots") return null;
  const nextPage = () => {
    const page = Number(value) + 1;
    navigate(`/toots/${page}`);
  };
  const beforePage = () => {
    const page = Number(value) - 1;
    navigate(`/toots/${page}`);
  };

  return (
    <div className="buttons">
      {hasBefore ? (
        <button className="custom-button" onClick={beforePage}>
          Back
        </button>
      ) : (
        <></>
      )}
      {hasNext ? (
        <button className="custom-button" onClick={nextPage}>
          Next
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

const DailyBoard: React.FC<DailyProps> = (props) => {
  const { category } = props;
  let { value } = useParams();

  const { pathname } = useLocation();
  useEffect(() => {
    scrollToTop();
  }, [pathname]);
  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  };

  if (typeof value === "undefined") {
    value = "1";
  }
  const [dailyData, setDailyData] = useState<DailyData[]>([]);
  const [hasNext, setHasNext] = useState<boolean>(true);
  const [hasBefore, setHasBefore] = useState<boolean>(false);
  useEffect(() => {
    // Make an HTTP GET request
    fetch(`${API_URL}/${category}/${value}`)
      .then((response) => response.json())
      .then((data) => {
        // for pagination
        if (data.hasOwnProperty("hasNext")) {
          setDailyData(data.toots);
          setHasNext(data.hasNext);
          setHasBefore(data.hasBefore);
        } else {
          // Update the state with the received data
          setDailyData(data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [value]);
  return (
    <div className="daily-div main-content">
      <ControlButtons
        hasNext={hasNext}
        hasBefore={hasBefore}
        value={value}
        category={category}
      ></ControlButtons>
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
      <ControlButtons
        hasNext={hasNext}
        hasBefore={hasBefore}
        value={value}
        category={category}
      ></ControlButtons>
    </div>
  );
};
export default DailyBoard;
