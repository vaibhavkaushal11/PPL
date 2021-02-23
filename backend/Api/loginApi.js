const regdb = require("../schemas/pplSchema");


module.exports = {
  loginuser: async function (body) {
    let name1 = body.name;
    let pass1 = body.pass;

    let x = await regdb.findOne({ email: name1 });
    let y = await regdb.findOne({ pass: pass1 });

    if (body.name && body.pass) {
      if (x && y) {
        let ab = "Log In Successful!";
        return ab;
      } else {
        let cd = "User doesn't Exist";
        return cd;
      }
    }
  }
}