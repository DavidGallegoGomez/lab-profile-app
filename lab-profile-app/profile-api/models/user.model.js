const mongoose = require('mongoose')
const bcrypt = require("bcrypt")
const SALT_FACTOR = 10;

const URL_PATTERN   = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
const EMAIL_PATTERN = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PASS_PATTERN  = /^(((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])))/;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    match: [EMAIL_PATTERN, "Invalid name pattern"],
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    match: [PASS_PATTERN, "Must include at least one small char, capital a number and length at least 6 chars"]
  },
  campus: {
    type: String,
    required: true,
    enum: ["Madrid", "Barcelona", "Miami", "Paris", "Berlin", "Amsterdam","México", "Sao Paulo"]
  },
  course: {
    type: String,
    required: true,
    enum: ["WebDev", "UX/UI", "Data Analytics"]
  },
  avatarURL: {
    type: String,
    match: [URL_PATTERN, "ivalid URL"],
    default: `https://gravatar.com/avatar/${Math.floor(Math.random()*90000)}?s=400&d=robohash&r=x`
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      delete ret.password;
      return ret;
    }
  }
})

userSchema.pre('save', function(next) {
  const user = this;
  if (user.isModified('password')) {
    bcrypt.genSalt(SALT_FACTOR)
      .then(salt => {
        return bcrypt.hash(user.password, salt)
          .then(hash => {
            user.password = hash;
            next();
          })
      })
      .catch(next)
  }
  else {
    next()
  }
})

userSchema.methods.checkPassword = function(password) {
  return bcrypt.compare(password, this.password);
}

const User = mongoose.model("User", userSchema);

module.exports = User