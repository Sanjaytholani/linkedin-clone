import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./Sidebar.css";
function Sidebar() {
  const user = useSelector(selectUser);

  const recent = (topic) => (
    <div className="sidebar__recentItem">
      <p className="sidebar__hash">#</p>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          className="sidebar__image"
          src="https://i.pinimg.com/originals/c1/37/63/c13763c4ba5a061299acc387f9d70959.jpg"
          alt="img"
        />

        <Avatar className="sidebar__avatar" alt={user.name} src={user?.photo} />

        <h2 className="sidebar__name">{user.name}</h2>
        <h4 className="sidebar__email">{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p className="sidebar__statText">Who viewed you</p>
          <p className="sidebar__statNumber">
            {1500 + Math.floor(Math.random(1) * 6000)}
          </p>
        </div>
        <div className="sidebar__stat">
          <p className="sidebar__statText">Views on Posts</p>
          <p className="sidebar__statNumber">
            {1500 + Math.floor(Math.random(1) * 6000)}
          </p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recent("Reactjs")}
        {recent("Programming")}
        {recent("Javascript")}
        {recent("Firebase")}
        {recent("SoftwareEngineering")}
      </div>
    </div>
  );
}

export default Sidebar;
