import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { IconButton } from "@material-ui/core";
import "./Signin.css";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
function Signin() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const passwordRef = useRef(null);
  const managePassword = () => {
    setShow(!show);
    passwordRef.current.type === "text"
      ? (passwordRef.current.type = "password")
      : (passwordRef.current.type = "text");
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            name: userAuth.user.displayName,
            photo: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signin">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/1024px-LinkedIn_Logo_2013.svg.png"
        alt="Lindein"
      />
      <form className="signin__form">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <div className="signin__password">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="password__input"
            type="password"
            placeholder="Password"
            ref={passwordRef}
          />
          <IconButton onClick={managePassword}>
            {show ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </IconButton>
        </div>
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
      </form>
      <p>
        Not a Member?{" "}
        <Link className="signin__register" to="/SignUp">
          Register Now
        </Link>
      </p>
    </div>
  );
}

export default Signin;
