import React, { useState, useEffect } from "react";
import axios from "axios";
import FormData from "form-data";
import config from '../../config/config'

function Upload(props) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState("");
  const [res, setRes] = useState({});

  let submit = (e) => {
    e.preventDefault();
    let data = new FormData();  
    data.append("filename", file);
    data.append("title", title);
    data.append("category", category);
    let uname = localStorage.getItem("uname");
    data.append("uname", uname);

    axios
      .post(config.uploadPostApi, data, {
        headers: {
          "Content-Type": "multipart/form-data;",
        },
      })
      .then((response) => {
        props.inc();
        setRes(response);
      });

    document.getElementById("A").reset();

  };

  return (
    <div className="uploadform">
      <form id="A">
        <h2>Upload Image</h2>
        <br></br>
        <br></br>
        <h4>
          Description:&nbsp;
          <input
            type="text"
            name="title"
            onChange={(evt) => {
              setTitle(evt.target.value);
            }}
          ></input>
        </h4>
        <br></br>
        <h4>
          Category: &nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="category"
            onChange={(evt) => {
              setCategory(evt.target.value);
            }}
          ></input>
        </h4>
        <br></br>
        <br></br>
        <h2>
          <input
            type="file"
            name="filename"
            onChange={(evt) => {
              setFile(evt.target.files[0]);
            }}
          ></input>
        </h2>
        <br></br>
        <br></br>
        <input
          type="submit"
          defaultValue="Submit"
          value="Submit"
          onClick={submit}
          // onClick={() => setClick(!click)}
        />
      </form>
    </div>
  );
}

export default Upload;
