import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import config from "../../config/config";
import Router, { Link } from "react-router-dom";
import history from "../../History/History";

function ForgetPassword() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [resData, setResdata] = useState();
  const [otp, setOtp] = useState();

  // const setModalIsOpenToTrue = () => {
  //   setModalIsOpen(true);
  // };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [hello, setHello] = useState();
  const [z, setZ] = useState();

  let submit = (e) => {
    e.preventDefault();
    setModalIsOpen(true);
    localStorage.setItem("email", email);

    let Data = {
      email: email,
    };

    // console.log(email);

    axios.post(config.resetApi, Data).then((response) => {
      // console.log(response.data);
      // setGetData(response);

      setHello();

      if (response.data == "Email Does Not Exist!") {
        setHello("Email Does Not Exist!");
      } else {
        setResdata(response.data);
      }
      // console.log(resData);
    });
  };

  let check = (e) => {
    e.preventDefault();
    // setModalIsOpen(false);

    let Data = {
      email: email,
      pass: pass,
    };

    // console.log(resData.data);
    // console.log(otp);

    if (resData == otp) {
      history.push("/reset");
     
    } else {
      setZ("Incorrect OTP!");
    }
  };

  return (
    <div>
      <>
       
        <div className="content_rgt">
          <div className="register_sec">
            <h1>Forgot Password</h1>
            <ul>
              <li>
                <span>Enter E-mail ID</span>
                <input
                  type="text"
                  name="email"
                  onChange={(evt) => {
                    setEmail(evt.target.value);
                  }}
                />
              </li>
              <li>
                <input type="submit" defaultValue="Submit" onClick={submit} />
                <br></br>
                {hello == "Email Does Not Exist!" ? (
                  <h1>{hello}</h1>
                ) : (
                  <Modal isOpen={modalIsOpen} className="custom-modal-style">
                    <div className="popup_sec" id="pop_forgt">
                      <div className="clos_btn">
                        <img
                          src="images/clos.png"
                          alt
                          id="clos_pop"
                          onClick={setModalIsOpenToFalse}
                        />
                      </div>

                      <div className="pop_hdr">
                        Please Check Your Mail Box! for Reset Password Link
                      </div>
                      <div className="man_contnt">
                        {/* <span>Please Check Your Mail Box!</span> */}
                        Enter
                        OTP:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input
                          type="text"
                          name="otp"
                          onChange={(evt) => {
                            setOtp(evt.target.value);
                          }}
                        />
                        <br></br>
                        <br></br>
                        <br></br>
                        <Link to="/reset">
                          <input type="submit" value="OK" onClick={check} />
                        </Link>
                        <h1>{z}</h1>
                      </div>
                    </div>
                  </Modal>
                )}
              </li>
            </ul>
          </div>
        </div>
        {/* </div>
        </div> */}
        <div className="clear" />
      </>
    </div>
  );
}

export default ForgetPassword;
