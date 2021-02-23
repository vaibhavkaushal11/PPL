const { strict } = require("assert");
const mongoose = require("mongoose");
const UserSchema = mongoose.Schema(
  {
    iname: {
      type: String,
      reqiured: true,
      unique: true,
    },

    uname: {
      type: String,
      reqiured: true,
    },

    title: {
      type: String,
      reqiured: true,
    },

    category: {
      type: String,
      reqiured: true,
    },

    time: {
      type: String,
    },
    date: {
      type: String,
    },

    like: {
      type: Number,
    },

    likedby: Array,

    comm:Number,

    comment: Array,

    commentby:Array,
  },

  { versionKey: false }
);

const User = mongoose.model("pplup", UserSchema);

module.exports = User;
