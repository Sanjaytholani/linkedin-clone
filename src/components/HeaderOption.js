import { Avatar } from "@material-ui/core";
import "./HeaderOption.css";
function HeaderOption({ Icon, title, src, onClick }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {src && (
        <Avatar
          onClick={onClick}
          style={{ cursor: "pointer" }}
          className="headerOption__avatar"
          src={src}
        />
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
