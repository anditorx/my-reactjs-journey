import React from "react";
import "./index.scss";

const Link = ({ title, onClick }) => {
  return <p onClick={onClick} className="link">{title}</p>;
};
export default Link;
