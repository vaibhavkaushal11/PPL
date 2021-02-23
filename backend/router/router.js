const { Console } = require("console");
const express = require("express");
const router = express.Router();
const registerApi = require("../Api/registerApi");
const loginApi = require("../Api/loginApi");
const uploadImageApi = require("../Api/uploadImageApi");
const bodyParser = require("body-parser");
const multer = require("multer");
const imgdb = require("../schemas/uploadschema");
const regdb = require("../schemas/pplSchema");
const likeApi = require("../Api/likeApi");
const dislikeApi = require("../Api/dislikeApi");
const commentApi = require("../Api/commentApi");
const nodemailer = require("nodemailer");
const config = require("../config/config");
const resetApi = require("../Api/resetApi");
const resetPassApi = require("../Api/resetPassApi");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, (iname = file.originalname));
  },
});

let upload = multer({ storage: storage });

router.get("/", function (req, res) {
  res.render("../views/home.ejs");
});

router.get("/login", function (req, res) {
  res.render("../views/login.ejs");
});

router.get("/register", function (req, res) {
  res.render("../views/register.ejs");
});

router.post("/register", async function (req, res) {
  console.log("Post Request");
  let checkuserexist = await registerApi.checkuser(req.body);
  res.send(checkuserexist);
});

router.post("/login", async (req, res) => {
  console.log("get call");
  console.log("Login Post Request");
  console.log(req.body.name);
  let checkuser = await loginApi.loginuser(req.body);
  console.log(checkuser);
  res.send(checkuser);
});

router.post("/timeline", upload.single("filename"), function (req, res) {
  uploadImageApi.uploadImage(req);
  res.send("Hello");
});

router.post("/getupload", async (req, res) => {
  let z = await imgdb.find({ uname: req.body.uname });
  res.send(z);
});

router.post("/like", async (req, res) => {
  let z = await likeApi.likeFun(req.body);
  res.send(z);
});

router.post("/dislike", async (req, res) => {
  let z = await dislikeApi.dislikeFun(req.body);
  res.send(z);
});

router.post("/comment", async (req, res) => {
  let z = await commentApi.commentFun(req.body);
  res.send(z);
});

router.post("/reset", async (req, res) => {
  let g = await resetApi.resetFun(req);
  res.send(g);
});

router.post("/resetpass", async (req, res) => {
  let z = await resetPassApi.resetPassFun(req);
  res.send(z);
});

module.exports = router;
