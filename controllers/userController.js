const User = require('../models/User');
const { pick } = require('../utils/helperFunctions');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JwtSecret } = require('../config/index');
const wrapper = require('../utils/wrapper');
const saltRounds = 10;

const register = async (req, res) => {
  try {
    req.body = { ...req.body };
    let data = pick(req.body, 'password', 'email');
    //   will need to add validation
    const hash = await bcrypt.hash(data.password, saltRounds);
    data.password = hash;
    let user = new User(data);
    await user.save();
    var token = jwt.sign({ _id: user._id, isAdmin: user.isAdmin }, JwtSecret);
    console.log(token);
    return res.send({ data: { token }, message: 'User signup successful' });
  } catch (error) {
    console.log(error);
  }
  //   res.render('register');
};

const login = async (req, res) => {
  try {
    req.body = { ...req.body };
    let data = pick(req.body, 'password', 'email');
    const user = await User.findOne({ email: data.email });
    if (user === null) {
      return res
        .status(400)
        .json({ error: 'Account with the email exist does not exist' });
    }
    const compare = await bcrypt.compare(data.password, user.password);
    if (!compare) {
      return res.status(400).send({ error: 'Incorrect password' });
    }
    var token = jwt.sign({ _id: user._id, isAdmin: user.isAdmin }, JwtSecret);
    console.log(token);
    return res.send({
      data: { token },
      message: "message: 'User login successful'",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { register, login };
