const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    password: String,
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      default: false,
      type: Boolean,
    },
  },
  { timestamps: true }
);

const users = mongoose.model('User', userSchema);

module.exports = users;
