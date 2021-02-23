import React, { useState,useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import config from '../../config/config'


function Register() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [uname, setUname] = useState("");
  const [getData, setGetData] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let submit = (e) => {
    e.preventDefault();
    console.log(email);
    let Data = {
      fname: fname,
      lname: lname,
      email: email,
      pass: pass,
      uname: uname,
    };
    axios.post(config.registerPostApi, Data).then((response) => {
      console.log(response);
      setGetData(response);
    });
    console.log(pass);
  };
  console.log("This is ", getData.data);

  return (
    <div>
      <>
        <div className="content_rgt">
          <div className="register_sec">
            <h1>Create An Account</h1>
            <form onSubmit={submit}>
              <ul>
                <li>
                  <span>Username</span>
                  <input
                    type="text"
                    name="uname"
                    onChange={(evt) => {
                      setUname(evt.target.value);
                    }}
                    placeholder="Enter your username"
                    required
                  />
                </li>
                <li>
                  <span>Password</span>
                  <input
                    type="text"
                    name="pass"
                    onChange={(evt) => {
                      setPass(evt.target.value);
                    }}
                    placeholder="Enter your password"
                    required
                  />
                </li>
                <li>
                  <span>Email</span>
                  <input
                    type="text"
                    name="email"
                    onChange={(evt) => {
                      setEmail(evt.target.value);
                    }}
                    placeholder="Enter your email"
                    required
                  />
                </li>
                <li>
                  <span>First Name</span>
                  <input
                    type="text"
                    onChange={(evt) => {
                      setFname(evt.target.value);
                    }}
                    name="fname"
                    placeholder="Enter your first name"
                    required
                  />
                </li>
                <li>
                  <span>Last Name</span>
                  <input
                    type="text"
                    onChange={(evt) => {
                      setLname(evt.target.value);
                    }}
                    name="lname"
                    placeholder="Enter your last name"
                    required
                  />
                </li>
                <li>
                  <input type="checkbox" />I agree to Term &amp; Conditions
                </li>
                <li>
                  <h1>{getData.data}</h1>
                  <input
                    type="submit"
                    defaultValue="Register"
                    value="Submit"
                    // onClick={submit}
                  />
                </li>
              </ul>
            </form>
            <div className="addtnal_acnt">
              {/* I already have an account. */}
              <Link to="/login">Login My Account !</Link>
            </div>
          </div>
        </div>
        <div className="clear" />
      </>
    </div>
  );
}

export default Register;
