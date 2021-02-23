import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import useForceUpdate from "use-force-update";
import axios from "axios";
import Register from "../Register/register";
import Timeline from "../Timeline/Timeline";
// import { createBrowserHistory } from "history";
import config from "../../config/config";
import history from "../../History/History";

function Login() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [getData, setGetData] = useState({});
  // const history = createBrowserHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let submit = (e) => {
    e.preventDefault();
    console.log(name);
    let Data = {
      name: name,
      pass: pass,
    };

    axios.post(config.loginPostApi, Data).then((response) => {
      console.log(response);
      setGetData(response);

      if (response.data === "Log In Successful!") {
        history.push("/timeline");
        localStorage.setItem("uname", name);
      } else if (response.data === "User doesn't Exist") {
        history.push("/login");
      }
    });
    console.log(pass);
  };
  console.log("This is ", getData.data);

  return (
    <div>
      <>
        <div className="content_rgt">
          <div className="login_sec">
            <h1>Log In</h1>

            <form onSubmit={submit}>
              <ul>
                <li>
                  <span>Username / Email-ID</span>
                  <input
                    onChange={(evt) => {
                      setName(evt.target.value);
                    }}
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                  />
                </li>
                <li>
                  <span>Password</span>
                  <input
                    onChange={(evt) => {
                      setPass(evt.target.value);
                    }}
                    type="text"
                    placeholder="Enter your password"
                    name="pass"
                  />
                </li>
                <li>
                  <input type="checkbox" />
                  Remember Me
                </li>
                <li>
                  <input type="submit" defaultValue="Log In" />
                  <Link to="forgotpassword">Forgot Password</Link>
                </li>
              </ul>
            </form>
            <div className="addtnal_acnt">
              I do not have any account yet.
              <Link to="/register">Create My Account Now !</Link>
            </div>
          </div>
        </div>
        <div className="clear" />
      </>
    </div>
  );
}

export default Login;
