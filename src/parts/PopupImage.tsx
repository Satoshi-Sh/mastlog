import React from "react";
import "./PopupImage.css";
import { PopupProps } from "../interfaces/interfaces";

const PopupImage: React.FC<PopupProps> = ({ imageUrl, onClose }) => {
  return (
    <div className="popup-image-overlay" onClick={onClose}>
      <div className="popup-image-container">
        <img src={imageUrl} alt="Popup" className="popup-image" />
      </div>
    </div>
  );
};

export default PopupImage;
