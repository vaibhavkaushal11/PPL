import "./App.css";
import "./bootstrap.css";
import React from "react";
import Register from "./components/Register/register";
import Login from "./components/Login/Login";
import { Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Content_left from "./components/Content_left";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline/Timeline";
import Upload from "./components/Timeline/Upload";
import Profile from "./components/Timeline/Profile";
import history from "./History/History";
import ForgetPassword from "./components/Forget Password/ForgetPassword";

function App() {
  if (
    window.location.pathname == "/timeline" &&
    localStorage.getItem("uname") == null
  ) {
    history.push("/login");
  }

  return (
    <Router history={history}>
      <div className="App">
        <Nav />

        <switch>
          <Route path="/login" component={Content_left}></Route>
          <Route path="/register" component={Content_left}></Route>
          <Route path="/timeline" component={Profile}></Route>
          <Route path="/forgotpassword" component={Content_left}></Route>
          <Route path="/reset" component={Content_left}></Route>
        </switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
