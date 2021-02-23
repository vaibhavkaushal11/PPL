const regdb = require("../schemas/pplSchema");
const imgdb = require("../schemas/uploadschema");
const nodemailer = require("nodemailer");
const config = require("../config/config");
module.exports = {
  resetPassFun: async function (req) {
    let check = await regdb.findOne({ email: req.body.email });
    // console.log(check);

    let x;

    if (check) {
      let z = await regdb.updateOne(
        { email: req.body.email },
        { $set: { pass: req.body.pass } }
      );

      x = "Password Changed!";
    }
    return x;
  },
};
