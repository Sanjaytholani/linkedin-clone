import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";
import InputOption from "./InputOption";

function Post({ name, description, message, photo }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={photo} alt={name} />

        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="photo__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption title="Like" Icon={ThumbUpIcon} />
        <InputOption title="Comment" Icon={CommentIcon} />
        <InputOption title="Share" Icon={ShareIcon} />
        <InputOption title="Send" Icon={SendIcon} />
      </div>
    </div>
  );
}

export default Post;
