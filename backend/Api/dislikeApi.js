const regdb = require("../schemas/pplSchema");
const imgdb = require("../schemas/uploadschema");
module.exports = {
  dislikeFun: async function (req) {
    return imgdb
      .updateOne(
        { $and: [{ _id: req._id }, { likedby: req.uname  }] },
        { $inc: { like: -1 }, $pull: { likedby: req.uname } }
      )
      .then((res) => {
        return res;
      });
  },
};
