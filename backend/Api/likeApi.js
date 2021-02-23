const regdb = require("../schemas/pplSchema");
const imgdb = require("../schemas/uploadschema");
module.exports = {
  likeFun: async function (req) {
    return imgdb
      .updateOne(
        { $and: [{ _id: req._id }, { likedby: { $ne: req.uname } }] },
        { $inc: { like: 1 }, $push: { likedby: req.uname } }
      )
      .then((res) => {
        return res;
      });
  },
};
