import React from "react";
import "./index.scss";
import { ImgBgLogin } from "../../../assets";

const Upload = () => {
  return (
    <div className="upload">
			<img className="preview" src={ImgBgLogin} alt="preview" />
      <input type="file" />
    </div>
  );
};

export default Upload;
