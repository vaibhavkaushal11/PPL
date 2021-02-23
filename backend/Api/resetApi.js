const regdb = require("../schemas/pplSchema");
const imgdb = require("../schemas/uploadschema");
const nodemailer = require("nodemailer");
const config = require("../config/config");
module.exports = {
  resetFun: async function (req) {
    let u;

    let check = await regdb.findOne({ email: req.body.email });

    if (check == null) {
      u = "Email Does Not Exist!";
    } else if (check != null) {
      let mailOptions = {
        from: "config.user",
        to: check.email,
        subject: "Password Reset OTP",
        text: Math.floor(1000 + Math.random() * 9000).toString(),
      };

      if (check) {
        let transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: config.user,
            pass: config.password,
          },
        });

        await transporter.sendMail(mailOptions, function (error, res) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + res.response);
          }
        });
      }

      u = mailOptions.text;
    }
    return u;
  },
};
