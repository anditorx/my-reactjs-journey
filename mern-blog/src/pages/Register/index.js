import React from "react";
import "./index.scss";
import { ImgBgRegis } from "../../assets";
import { Input, Button, Gap, Link } from "../../components";
import {useHistory} from 'react-router-dom';

const Register = () => {
  const history = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img src={ImgBgRegis} className="bg-image" alt="background" />
      </div>
      <div className="right">
        <p className="title">Register</p>
				<Input label="Full Name" placeholder="Full Name" />
				<Gap height={12} />
				<Input label="Email" placeholder="Email"/>
				<Gap height={12} />
				<Input label="Password" placeholder="Password"/>
				<Gap height={30} />
				<Button title="Register" onClick={() => history.push('/')}/>
				<Gap height={100} />
				<Link title="Have already account? Login" onClick={() => history.push('/login')}/>
      </div>
    </div>
  );
};
export default Register;
