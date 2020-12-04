import React from "react";
import { Button, BlogItem, Gap, Link } from "../../components";
import "./index.scss";
import {useHistory} from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button title="Create Article" onClick={() => history.push('/create-blog')}/>
      </div>
			<Gap height={20} />
      <div className="content-wrapper">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
			<div className="pagination">
				<Link title="Previous" />
				<Gap width={30} />
				<Link title="Next" />
			</div>
    </div>
  );
};
export default Home;
