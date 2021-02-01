import React, { useEffect, useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";
import firebase from "firebase";
import { db } from "../firebase";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";
function Feed() {
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.name,
      description: user.email,
      message: post,
      photo: user?.photo,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setPost("");
  };
  useEffect(() => {
    db.collection("posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form onSubmit={(e) => sendPost(e)}>
            <input
              type="text"
              value={post}
              onChange={(e) => setPost(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption title="Photo" Icon={ImageIcon} color="#70b5f9" />
          <InputOption title="Video" Icon={SubscriptionsIcon} color="#E7a33E" />
          <InputOption title="Event" Icon={EventNoteIcon} color="#C0cbcd" />
          <InputOption
            title="Write Article"
            Icon={CalendarViewDayIcon}
            color="#7fc15e"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photo } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photo={photo}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
