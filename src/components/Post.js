import { Avatar } from "@material-ui/core";
import "./Post.css";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import InputOption from "./InputOption";
import { forwardRef } from "react";

const Post = forwardRef(({ name, description, message, photo }, ref) => {
  return (
    <div ref={ref} className="post">
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
        <InputOption title="Like" Icon={ThumbUpAltOutlinedIcon} />
        <InputOption title="Comment" Icon={CommentOutlinedIcon} />
        <InputOption title="Share" Icon={ShareOutlinedIcon} />
        <InputOption title="Send" Icon={SendOutlinedIcon} />
      </div>
    </div>
  );
});

export default Post;
