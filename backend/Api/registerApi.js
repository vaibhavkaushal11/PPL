const regdb = require("../schemas/pplSchema");

module.exports = {
  checkuser: async function (body) {
    let email1 = body.email;
    let a = await regdb.findOne({ email: email1 });
    if (body.fname && body.lname && body.email && body.pass && body.uname) {
      if (a) {
        let p = "Already exists!";
        return p;
      } else {
        regdb.create(body);
        let q = "User Registered, Click on Login Below!";
        return q;
      }
    }
  },
};
