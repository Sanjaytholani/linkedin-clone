import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { IconButton } from "@material-ui/core";
import { useRef } from "react";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [show, setShow] = useState(false);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const managePassword = () => {
    setShow(!show);
    passwordRef.current.type === "text"
      ? (passwordRef.current.type = "password")
      : (passwordRef.current.type = "text");
  };
  const signUp = (e) => {
    e.preventDefault();
    if (!name) {
      return alert("Enter Name");
    } else {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
          userAuth.user
            .updateProfile({
              displayName: name,
              photoURL: photoUrl,
            })
            .then(() => {
              dispatch(
                login({
                  email: userAuth.user.email,
                  uid: userAuth.user.uid,
                  name: name,
                  photo: photoUrl,
                })
              );
            });
        })
        .catch((error) => alert(error));
    }
  };
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/1024px-LinkedIn_Logo_2013.svg.png"
        alt="Lindein"
      />
      <form className="login__form">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full Name (required)"
        />
        <input
          type="text"
          value={photoUrl}
          onChange={(e) => setPhotoUrl(e.target.value)}
          placeholder="Image URL (optional)"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <div className="login__password">
          <input
            className="password__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            ref={passwordRef}
          />
          <IconButton onClick={managePassword}>
            {show ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </IconButton>
        </div>
        <button type="submit" onClick={signUp}>
          Sign Up
        </button>
      </form>
      <p>
        Alredy a Member?{" "}
        <Link className="login__signin" to="/Signin">
          Sign In
        </Link>
      </p>
    </div>
  );
}

export default Login;
