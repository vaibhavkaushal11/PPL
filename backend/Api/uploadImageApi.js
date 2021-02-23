const regdb = require("../schemas/pplSchema");
const imgdb = require("../schemas/uploadschema")
module.exports = {
 

  uploadImage: function (req)
  {
    let file = req.file.filename;
  let title = req.body.title;
  let category = req.body.category;
  let uname = req.body.uname;
  

  imgdb.create({
    iname: file,
    category: category,
    title: title,
    time: new Date().toTimeString(),
    date: new Date().toDateString(),
    uname: uname,
  });
  }

};
