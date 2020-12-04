import React from "react";
import "./index.scss";
import { ImgBgLogin } from "../../assets";
import { Input, Button, Gap, Link } from "../../components";
import {useHistory} from 'react-router-dom';

const Login = () => {
	const history = useHistory();
	return(
		<div className="main-page">
		<div className="left">
			<img src={ImgBgLogin} className="bg-image" alt="background" />
		</div>
		<div className="right">
			<p className="title">Login</p>
			<Input label="Email" placeholder="Email"/>
			<Gap height={12} />
			<Input label="Password" placeholder="Password"/>
			<Gap height={30} />
			<Button title="Login" onClick={() => history.push('/')}/>
			<Gap height={100} />
			<Link title="Don't have account? Register" onClick={() => history.push('/register')} />
		</div>
	</div>
	)
}
export default Login;