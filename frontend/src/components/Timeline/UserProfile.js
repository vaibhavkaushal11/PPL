import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config/config";
import { Link } from "react-router-dom";
import Upload from "./Upload";
import Like from "../Like";

function UserProfile(props) {
  const [imgdata, setImgData] = useState([]);
  const [count, setCount] = useState(false);
  const [click, setClick] = useState(false);
  const [like, setLike] = useState(0);
  const [getData, setGetData] = useState();
  const [comm, setComm] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const id = localStorage.getItem("uname");
    axios.post(config.uploadGetApi, { uname: id }).then((response) => {
      setImgData(response.data);
      console.log(imgdata);
    });
  });

  let submit = (e) => {
    e.preventDefault();

    setLike(!like);

    if (like == true) {
      let Data = {
        uname: localStorage.getItem("uname"),
        _id: props.match.params.number,
      };

      axios.post(config.likeApi, Data).then((response) => {
        console.log(response);
        setGetData(response);
      });
    } else if (like == false) {
      let Data = {
        uname: localStorage.getItem("uname"),
        _id: props.match.params.number,
      };

      axios.post(config.dislikeApi, Data).then((response) => {
        console.log(response);
        setGetData(response);
      });
    }
  };

  let comment = (e) => {
    e.preventDefault();

    let Data = {
      uname: localStorage.getItem("uname"),
      _id: props.match.params.number,
      comment: comm,
    };

    axios.post(config.commentApi, Data).then((response) => {
      console.log(response);
      setGetData(response);
    });
  };

  return (
    <div>
      {console.log(props)}
      <div className="content_rgt">
        {click ? <Upload /> : null}
        <br></br>
        <br></br>

        <div className="rght_btn">
          {" "}
          <span className="rght_btn_icon">
            <img src="/images/btn_iconb.png" alt="up" />
          </span>{" "}
          <span className="btn_sep">
            <img src="/images/btn_sep.png" alt="sep" />
          </span>{" "}
          <Link onClick={() => setClick(!click)}> Upload Post</Link>{" "}
        </div>

        <div className="rght_btn">
          {" "}
          <span className="rght_btn_icon">
            <img src="/images/btn_icona.png" alt="up" />
          </span>{" "}
          <span className="btn_sep">
            <img src="/images/btn_sep.png" alt="sep" />
          </span>{" "}
          <a href="#">Invite Friends</a>{" "}
        </div>
        <div className="rght_cate">
          <div className="rght_cate_hd" id="rght_cat_bg">
            Categories
          </div>
          <div className="rght_list">
            <ul>
              <li>
                <a href="#">
                  <span className="list_icon">
                    <img src="/images/icon_01.png" alt="up" />
                  </span>{" "}
                  CATS
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="list_icon">
                    <img src="/images/icon_02.png" alt="up" />
                  </span>{" "}
                  Dogs
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="list_icon">
                    <img src="/images/icon_03.png" alt="up" />
                  </span>{" "}
                  Birds
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="list_icon">
                    <img src="/images/icon_04.png" alt="up" />
                  </span>{" "}
                  Rabbit
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="list_icon">
                    <img src="/images/icon_05.png" alt="up" />
                  </span>{" "}
                  Others
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="rght_cate">
          <div className="rght_cate_hd" id="opn_cat_bg">
            Featured
          </div>
          <div className="sub_dwn">
            <div className="feat_sec">
              <div className="feat_sec_img">
                <img src="/images/feat_img1.png" alt="image" />
              </div>
              <div className="feat_txt">Lorem Ipusum Text</div>
            </div>
            <div className="feat_sec">
              <div className="feat_sec_img">
                <img src="/images/feat_img2.png" alt="image" />
              </div>
              <div className="feat_txt">Lorem Ipusum Text</div>
              <div className="btm_rgt">
                <div className="btm_arc">Dogs</div>
              </div>
            </div>
            <div className="feat_sec">
              <div className="feat_sec_img">
                <img src="/images/feat_img3.png" alt="image" />
              </div>
              <div className="feat_txt">Lorem Ipusum Text</div>
              <div className="btm_rgt">
                <div className="btm_arc">Rabbits</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content_lft">
        {imgdata.map((data) => {
          if (props.match.params.number == data._id) {
            return (
              <div className="div_a">
                <div className="div_title">{data.title} </div>
                <div className="btm_rgt">
                  <div className="btm_arc">{data.category}</div>
                </div>
                <div className="div_top">
                  <div className="div_top_lft">
                    <img src="/images/img_6.png" />
                    {data.uname}
                  </div>
                  <div className="div_top_rgt">
                    <span className="span_date">{data.date}</span>
                    <span className="span_time">{data.time.slice(0, 5)}</span>
                  </div>
                </div>
                <div className="div_image">
                  {/* <Link to={`/timeline/${data._id}`}> */}{" "}
                  <img src={`http://localhost:3001/${data.iname}`} alt="pet" />
                  {/* </Link> */}
                </div>
                <div className="div_btm">
                  <div className="btm_list">
                    <ul>
                      <li>
                        <a onClick="">
                          <span className="btn_icon">
                            <img src="/images/icon_001.png" alt="share" />
                          </span>
                          Share
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="btn_icon">
                            <img src="/images/icon_002.png" alt="share" />
                          </span>
                          Flag
                        </a>
                      </li>
                      <li>
                        {/* <Like /> */}
                        <a style={{ cursor: "pointer" }} onClick={submit}>
                          <span className="btn_icon">
                            <img src="/images/icon_003.png" alt="share" />
                          </span>
                          {data.like ? data.like : 0} Likes
                        </a>
                      </li>
                      <li>
                        <a style={{ cursor: "pointer" }}>
                          <span className="btn_icon">
                            <img src="/images/icon_004.png" alt="share" />
                          </span>
                          {data.comm ? data.comm : 0} Comments
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="contnt_3">
                  <ul>
                    {/* <div className="list_info">
                        {/* <h1>{item}</h1> */}
                    {/* {data.comment[0]} */}
                    {/* </div> */}

                    {data.comment.map((item, index) => {
                      return (
                        <div>
                          <li>
                            <div className="list_image">
                              <div className="image_sec">
                                <img src="/images/post_img.png" />
                              </div>
                              {data.commentby.map((item, index1) => {
                                if (index == index1) {
                                  return (
                                    <div className="image_name">{item}</div>
                                  );
                                }
                              })}
                            </div>
                            <div className="list_info">{item}</div>
                            <input
                              type="button"
                              defaultValue="Reply"
                              className="orng_btn"
                            />
                          </li>
                        </div>
                      );
                    })}
                    {/* </li> */}
                    <li>
                      <div className="cmnt_div1">
                        <input
                          type="text"
                          name="comment"
                          placeholder="Enter your Comment"
                          className="cmnt_bx1"
                          onChange={(evt) => {
                            setComm(evt.target.value);
                          }}
                        />
                        <input
                          type="submit"
                          className="sub_bttn1"
                          defaultValue="Submit Comment"
                          onClick={comment}
                        />
                      </div>
                    </li>
                  </ul>
                  <div className="view_div">
                    <a href="#">View more</a>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default UserProfile;
