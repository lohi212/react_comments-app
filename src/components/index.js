import React, { useState } from "react";
import Comments from "./Comments";

const sendCommentImg = require("../images/comment.png");

const CommentsContainer = () => {
  const [comments, setComments] = useState([]);
  const [value, setValue] = useState("");

  const handleOk = () => {
    setComments([value, ...comments]);
    setValue("");
  };

  return (
    <div className="root-container">
      <div className="input-wrapper">
        <input
          onChange={(e) => {
            setValue(e.target.value);
          }}
          className="input-container"
          value={value}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleOk();
          }}
        />
        <button onClick={handleOk} className="button-container">
          <img src={sendCommentImg} width="25px" />
        </button>
      </div>
      <Comments comments={comments} />
    </div>
  );
};

export default CommentsContainer;
