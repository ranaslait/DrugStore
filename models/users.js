const { string } = require("i/lib/util");
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const crypto = require("crypto");
// var passportLocalMongoose = require("passport-local-mongoose");

const { Schema } = mongoose;
//users schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: false
  },
  type: {
    type: String,
    required: true
  }
  , token: { type: String },
  expTime: { type: Number },

});
// userSchema.plugin(passportLocalMongoose);

const usercollection = new mongoose.model("user", userSchema);
module.exports = usercollection;
