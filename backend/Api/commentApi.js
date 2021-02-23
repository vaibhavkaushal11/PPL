const regdb = require("../schemas/pplSchema");
const imgdb = require("../schemas/uploadschema");
module.exports = {
  commentFun: async function (req) {
    return imgdb
      .updateOne(
        { _id: req._id },
        {
          $inc: { comm: 1 },
          $push: { comment: req.comment, commentby: req.uname },
        }
      )
      .then((res) => {
        return res;
      });
  },
};
