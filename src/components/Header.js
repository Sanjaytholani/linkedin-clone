import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Fragment } from "react";
import { Avatar } from "@material-ui/core";
function Header() {
  const headerOptions = (
    <>
      <HeaderOption Icon={HomeIcon} title="Home" />
      <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
      <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
      <HeaderOption Icon={ChatIcon} title="Messages" />
      <HeaderOption Icon={NotificationsIcon} title="Notifications" />
    </>
  );
  return (
    <Fragment>
      <div className="header__main">
        <div className="header">
          <div className="header__left">
            <img
              src="https://img.flaticon.com/icons/png/512/174/174857.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
              alt="linkedin logo"
            />
            <div className="header__search">
              <SearchIcon />
              <input type="text" />
            </div>
          </div>
          <div className="header__right">{headerOptions}</div>
          <Avatar
            className="header__avatar"
            alt="Remy Sharp"
            src="https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg"
          />
        </div>
      </div>
      <div className="header__right--bottom">{headerOptions}</div>
    </Fragment>
  );
}

export default Header;
