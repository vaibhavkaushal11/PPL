const mongoose = require("mongoose");
const UserSchema = mongoose.Schema(
  {
    uname: {
      type: String,
      reqiured: true,
    },

    pass: {
      type: String,
      reqiured: true,
    },

    email: {
      type: String,
      reqiured: true,
      unique: true,
    },

    fname: {
      type: String,
      reqiured: true,
    },
    lname: {
      type: String,
      reqiured: true,
    },
  },
  { versionKey: false }
);

const User = mongoose.model("ppluser", UserSchema);

module.exports = User;
