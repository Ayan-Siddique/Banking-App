const userSchema = require("../models/user.model");

function registerUser(req, res) {
  const { name, email, password } = req.body;
}


function loginUser(req, res) {
  const { email, password } = req.body;
  
}

module.exports = {
  registerUser,
  loginUser
};