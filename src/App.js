import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import { login, logout, selectUser } from "./features/userSlice";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Signin from "./components/Signin";
import { useEffect, useState } from "react";
import logo from "./logo.gif";
import { auth } from "./firebase";
import Widgets from "./components/Widgets";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(async () => {
      await setLoading(false);
    }, 2500);
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            email: user.email,
            photo: user.photoURL,
            name: user.displayName,
            uid: user.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return loading === true ? (
    <div className="logo__container">
      <img className="logo" src={logo} alt="LOGO-svg" />
    </div>
  ) : (
    <Router>
      <Switch>
        <div className="app">
          <Route exact path="/Signup">
            {user ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route exact path="/Signin">
            {user ? <Redirect to="/" /> : <Signin />}
          </Route>
          <Route exact path="/">
            {!user ? (
              <Redirect to="/Signin" />
            ) : (
              <>
                <Header />
                <div className="app__main">
                  <Sidebar />
                  <Feed />
                  <Widgets />
                </div>
              </>
            )}
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
