import React from "react";
import "./index.scss";
import { LogoReact, IcFb, IcTwitter, IcIG, IcYoutube } from "../../../assets";

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="icon" />
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img className="logo" src={LogoReact} alt="logo-react" />
        </div>
        <div className="social-wrapper">
          <Icon img={IcFb} />
          <Icon img={IcTwitter} />
          <Icon img={IcIG} />
          <Icon img={IcYoutube} />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright &copy; aleankas | 2020 </p>
      </div>
    </div>
  );
};

export default Footer;
