import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ForgetPassword from "./Forget Password/ForgetPassword";
import Login from "./Login/Login";
import Register from "./Register/register";
import Reset from "./reset/Reset";
function Content_left() {
  return (
    <div className="content">
      <div className="content_lft">
        <h1>Welcome from PPL!</h1>
        <p className="discrptn">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text.{" "}
        </p>
        <img src="images/img_9.png" alt />
      </div>
      <Router>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/forgotpassword" component={ForgetPassword}></Route>
        <Route path="/reset" component={Reset}></Route>
      </Router>
    </div>
  );
}

export default Content_left;
