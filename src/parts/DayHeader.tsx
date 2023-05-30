import "./DayHeader.css";
import { DayProps } from "../interfaces/interfaces";
export const dayArr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const DayHeader: React.FC<DayProps> = (props) => {
  const { day, dayName, count } = props;
  const name: string = dayArr[dayName - 1];
  return (
    <div className="day-header">
      <h3 className="data">
        {day} {name}
        <span className="count"> {count} tweet</span>
      </h3>
    </div>
  );
};

export default DayHeader;
