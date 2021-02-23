import React from "react";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import Upload from "./Upload";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import config from "../../config/config";

function Timeline() {
  const [click, setClick] = useState(false);
  const [imgdata, setImgData] = useState([]);
  const [count, setCount] = useState(false);
  useEffect(() => {
    const id = localStorage.getItem("uname");
    axios.post(config.uploadGetApi, { uname: id }).then((response) => {
      setImgData(response.data);
      console.log(response.data);
    });
  }, [count]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // imgdata.reverse();
  console.log(count);
  let inc = () => {
    setCount(!count);
  };

  return (
    <div>
      <>
        <div className="content_rgt">
          {click ? <Upload inc={inc} /> : null}
          <br></br>
          <br></br>

          <div className="rght_btn">
            {" "}
            <span className="rght_btn_icon">
              <img src="images/btn_iconb.png" alt="up" />
            </span>{" "}
            <span className="btn_sep">
              <img src="images/btn_sep.png" alt="sep" />
            </span>{" "}
            <Link onClick={() => setClick(!click)}> Upload Post</Link>{" "}
          </div>

          <div className="rght_btn">
            {" "}
            <span className="rght_btn_icon">
              <img src="images/btn_icona.png" alt="up" />
            </span>{" "}
            <span className="btn_sep">
              <img src="images/btn_sep.png" alt="sep" />
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
                      <img src="images/icon_01.png" alt="up" />
                    </span>{" "}
                    CATS
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="list_icon">
                      <img src="images/icon_02.png" alt="up" />
                    </span>{" "}
                    Dogs
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="list_icon">
                      <img src="images/icon_03.png" alt="up" />
                    </span>{" "}
                    Birds
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="list_icon">
                      <img src="images/icon_04.png" alt="up" />
                    </span>{" "}
                    Rabbit
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="list_icon">
                      <img src="images/icon_05.png" alt="up" />
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
                  <img src="images/feat_img1.png" alt="image" />
                </div>
                <div className="feat_txt">Lorem Ipusum Text</div>
              </div>
              <div className="feat_sec">
                <div className="feat_sec_img">
                  <img src="images/feat_img2.png" alt="image" />
                </div>
                <div className="feat_txt">Lorem Ipusum Text</div>
                <div className="btm_rgt">
                  <div className="btm_arc">Dogs</div>
                </div>
              </div>
              <div className="feat_sec">
                <div className="feat_sec_img">
                  <img src="images/feat_img3.png" alt="image" />
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
          <div className="contnt_1">
            <div className="list_1">
              <ul>
                <li>
                  <input type="checkbox" className="chk_bx" />
                  Friends
                </li>
                <li>
                  <input type="checkbox" className="chk_bx" />
                  Flaged
                </li>
              </ul>
            </div>
            <div className="timeline_div">
              <div className="timeline_div1">
                <div className="profile_pic">
                  <img src="images/timeline_img1.png" />
                  <div className="profile_text">
                    <a href="#">Change Profile Pic</a>
                  </div>
                </div>
                <div className="profile_info">
                  <div className="edit_div">
                    <a href="#">
                      Edit <img src="images/timeline_img.png" />
                    </a>
                  </div>
                  <div className="profile_form">
                    <ul>
                      <li>
                        <div className="div_name1">Name :</div>
                        <div className="div_name2">Stefiney Gibbs</div>
                      </li>
                      <li>
                        <div className="div_name1">Sex :</div>
                        <div className="div_name2">Female</div>
                      </li>
                      <li>
                        <div className="div_name1">Description :</div>
                        <div className="div_name3">
                          This is an example of a comment. You can create as
                          many comments like this one or sub comments as you
                          like and manage all of your content inside Account.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="timeline_div2">
                <ul>
                  <li>
                    <a href="#" className="active">
                      Timeline{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">About </a>
                  </li>
                  <li>
                    <a href="#">Album</a>
                  </li>
                  <li>
                    <a href="#"> Pets</a>
                  </li>
                  <li>
                    <a href="#">My Uploads </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {imgdata
            .map((data) => {
              return (
                <div className="div_a">
                  <div className="div_title">{data.title} </div>
                  <div className="btm_rgt">
                    <div className="btm_arc">{data.category}</div>
                  </div>
                  <div className="div_top">
                    <div className="div_top_lft">
                      <img src="images/img_6.png" />
                      {data.uname}
                    </div>
                    <div className="div_top_rgt">
                      <span className="span_date">{data.date}</span>
                      <span className="span_time">{data.time.slice(0, 5)}</span>
                    </div>
                  </div>
                  <div className="div_image">
                    <Link to={`/timeline/${data._id}`}>
                      {" "}
                      <img
                        src={`http://localhost:3001/${data.iname}`}
                        alt="pet"
                      />
                    </Link>
                  </div>
                  <div className="div_btm">
                    <div className="btm_list">
                      <ul>
                        <li>
                          <a href="#">
                            <span className="btn_icon">
                              <img src="images/icon_001.png" alt="share" />
                            </span>
                            Share
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="btn_icon">
                              <img src="images/icon_002.png" alt="share" />
                            </span>
                            Flag
                          </a>
                        </li>
                        <li>
                          <a>
                            <span className="btn_icon">
                              <img src="images/icon_003.png" alt="share" />
                            </span>
                            {data.like ? data.like : 0} Likes
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="btn_icon">
                              <img src="images/icon_004.png" alt="share" />
                            </span>
                            {data.comm ? data.comm : 0} Comments
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })
            .reverse()}
        </div>
        <div className="navbar navbar-inverse navbar-fixed-top">
          <div className="navbar-inner">
            <div className="container">
              <button
                type="button"
                className="btn btn-navbar"
                data-toggle="collapse"
                data-target=".nav-collapse"
              >
                {" "}
                <span className="icon-bar" /> <span className="icon-bar" />{" "}
                <span className="icon-bar" />{" "}
              </button>
              <a className="brand" href>
                PPL
              </a>
              <div className="pro_info pull-right">
                <div className="pro_icn">
                  <img src="images/pic_small.png" />
                </div>
                <div className="pro_txt">
                  Me
                  <b className="caret" />
                </div>
                <ul
                  className="dropdown-menu"
                  role="menu"
                  aria-labelledby="dLabel"
                >
                  <li>
                    <a tabIndex={-1} href="#">
                      My Profile
                    </a>
                  </li>
                  <li>
                    <a tabIndex={-1} href="#">
                      Message Box
                    </a>
                  </li>
                  <li>
                    <a tabIndex={-1} href="#">
                      Change Language
                    </a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a tabIndex={-1} href="#">
                      <input type="text" placeholder="search" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="nav-collapse collapse">
                <ul className="nav">
                  <li className="active">
                    {" "}
                    <a href>Home</a>{" "}
                  </li>
                  <li className>
                    {" "}
                    <a href>E-Coupons</a>{" "}
                  </li>
                  <li className>
                    {" "}
                    <a href>E-Brands</a>{" "}
                  </li>
                  <li className>
                    {" "}
                    <a href>Resuse Market</a>{" "}
                  </li>
                  <li className>
                    {" "}
                    <a href>Lost and Found</a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </>
    </div>
  );
}

export default Timeline;
