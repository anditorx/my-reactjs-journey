import React from "react";
import { Input, Button, Upload, TextArea, Gap, Link } from "../../components";
import "./index.scss";
import {useHistory} from 'react-router-dom';

const CreateBlog = () => {
  const history = useHistory();
  return (
    <div className="blog-post">
      <Link title="Back" onClick={() => history.push('/')} />
      <p className="title">Create New Blog</p>
      <Input label="Title" />
      <Upload />
      <TextArea />
      <Gap height={20} />
      <div className="btn-action">
        <Button title="Save" />
      </div>
			<Gap height={50} />
    </div>
  );
};

export default CreateBlog;
