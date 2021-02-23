const mongoose = require("mongoose");
const UserSchema = mongoose.Schema(
  {
    fname: {
      type: String,
      reqiured: true,
    },
    lname: {
      type: String,
      reqiured: true,
    },
    email: {
      type: String,
      reqiured: true,
      unique: true,
    },

    pass: {
      type: String,
      reqiured: true,
    },
  },
  { versionKey: false }
);

const User = mongoose.model("reguser", UserSchema);

module.exports = User;
