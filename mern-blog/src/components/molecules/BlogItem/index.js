import React from "react";
import "./index.scss";
import { ImgBgRegis } from "../../../assets";
import {useHistory} from 'react-router-dom';
import { Button, Gap } from "../../atoms";

const BlogItem = () => {
  const history = useHistory();
  return (
    <div className="blog-item">
      <img className="image-thumb" src={ImgBgRegis} alt="post" />
      <div className="content-detail">
        <p className="title">Lorem Ipsum is simply dummy text</p>
        <p className="author">Author - 2 September 2020</p>
        <p className="body">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <Gap height={20} />
        <Button title="View Detail" onClick={() => history.push('/detail-blog')}  />
      </div>
    </div>
  );
};

export default BlogItem;
