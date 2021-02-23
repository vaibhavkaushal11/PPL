import axios from "axios";
import React, { useState } from "react";
import config from "../../config/config";
import history from "../../History/History";

function Reset() {
  let [pass, setPass] = useState();
  let [pass2, setPass2] = useState();
  let [A, setA] = useState();

  let change = (e) => {
    e.preventDefault();
    if (pass == pass2) {
      let Data = {
        email: localStorage.getItem("email"),
        pass: pass,
      };

      axios.post(config.resetPassApi, Data).then((response) => {
              
        setA(response.data);
        history.push("/login");
      });
    } else {
      setA("Password Does not Match!");
    }
  };

  return (
    <>
      <div>
        <div className="content_rgt">
          <div className="register_sec">
            <h1>Reset Password</h1>
            <ul>
              <li>
                <span>Enter New Password</span>
                <input
                  type="text"
                  name="pass"
                  onChange={(evt) => setPass(evt.target.value)}
                  placeholder="Enter your new password"
                />
              </li>
              <li>
                <span>Confirm Password</span>
                <input
                  type="text"
                  name="pass2"
                  onChange={(evt) => setPass2(evt.target.value)}
                  placeholder="Enter your password again"
                />
              </li>
              <li>
                <input type="submit" defaultValue="Submit" onClick={change} />
              </li>

              <h1>{A}</h1>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reset;
