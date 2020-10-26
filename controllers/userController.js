const User = require('../models/User');
const { pick } = require('../utils/helperFunctions');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JwtSecret } = require('../config');
const saltRounds = 10;

const register = async (req, res, next) => {
  req.body = { ...req.body };
  let data = pick(req.body, 'password', 'email');
  //   will need to add validation
  let hash = null;
  bcrypt
    .hash(data.password, saltRounds)
    .then((r) => {
      hash = r;
      data.password = hash;
      console.log(hash);
      let user = new User(data);
      user
        .save()
        .then((savedUser) => {
          var token = jwt.sign(
            { _id: user._id, isAdmin: user.isAdmin },
            JwtSecret
          );
          return res.send({
            data: { token },
            message: 'User signup successful',
          });
        })
        .catch((err) => {
          return res.status(400).json({ error: 'email exists' });
        });
    })
    .catch((err) => {
      next(err);
    });
  //   res.render('register');
};

const login = (req, res, next) => {
  req.body = { ...req.body };
  let data = pick(req.body, 'password', 'email');
  User.findOne({ email: data.email })
    .then((user) => {
      if (user === null) {
        return res
          .status(400)
          .json({ error: 'Account with the email exist does not exist' });
      }
      bcrypt
        .compare(data.password, user.password)
        .then((compare) => {
          if (!compare) {
            return res.status(400).send({ error: 'Incorrect password' });
          }
          var token = jwt.sign(
            { _id: user._id, isAdmin: user.isAdmin },
            JwtSecret
          );
          return res.send({
            data: { token },
            message: "message: 'User login successful'",
          });
        })
        .catch((err) => next(err));
    })
    .catch((err) => next(err));
};

module.exports = { register, login };
