import React from 'react';
import './index.scss';
import {useHistory} from 'react-router-dom';

const Header = () => {
	const history = useHistory();
	return (
		<div className="header">
			<p className="logo-app" onClick={() => history.push('/')}>MERNBlog</p>
			<p className="menu-item" onClick={() => history.push('/login')}>Logout</p>
		</div>
	);
};



export default Header;
