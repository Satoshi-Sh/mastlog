import React from "react";
import "./PopupImage.css";
import { PopupProps } from "../interfaces/interfaces";

const PopupImage: React.FC<PopupProps> = ({ imageUrl, onClose }) => {
  const extention: string = imageUrl.slice(-3);
  return (
    <div className="popup-image-overlay" onClick={onClose}>
      <div className="popup-image-container">
        {extention === "mp4" ? (
          <video src={imageUrl} className="popup-image" autoPlay>
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={imageUrl} alt="Popup" className="popup-image" />
        )}
      </div>
    </div>
  );
};

export default PopupImage;
