import "./SearchBox.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [keyword, setKeyword] = useState<string>("");
  const navigate = useNavigate();
  const handleClick = () => {
    if (keyword == "") return;
    navigate(`/keyword/${keyword}`);
    setKeyword("");
  };
  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      handleClick();
    }
  };
  return (
    <div className="sidebox">
      <h3>Search</h3>
      <div className="input-div">
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyUp={handleEnterKeyPress}
        ></input>
        <button onClick={handleClick}>Search</button>
      </div>
    </div>
  );
};

export default SearchBox;
