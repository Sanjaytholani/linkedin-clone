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
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
function Header() {
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(logout());
    auth.signOut();
  };
  const user = useSelector(selectUser);
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
              <input placeholder="Search" type="text" />
            </div>
          </div>
          <div className="header__right">
            {headerOptions}

            {user?.photo ? (
              <HeaderOption
                onClick={signOut}
                src={user?.photo}
                title={user.name}
              />
            ) : (
              <HeaderOption
                onClick={signOut}
                src={user?.email[0]}
                title={user.name}
              />
            )}
          </div>
          {user?.photo ? (
            <Avatar
              onClick={signOut}
              style={{ cursor: "pointer" }}
              className="header__avatar--responsive"
              alt={user.name}
              src={user?.photo}
            />
          ) : (
            <Avatar
              onClick={signOut}
              style={{ cursor: "pointer" }}
              className="header__avatar--responsive"
              alt={user.name}
              src={user?.email[0]}
            />
          )}
        </div>
      </div>

      <div className="header__right--bottom">{headerOptions}</div>
    </Fragment>
  );
}

export default Header;
