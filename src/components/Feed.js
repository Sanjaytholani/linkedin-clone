import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";
function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
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
      <Post name="Tim Cook" description="Apple.com" message="Apple car" />
    </div>
  );
}

export default Feed;
