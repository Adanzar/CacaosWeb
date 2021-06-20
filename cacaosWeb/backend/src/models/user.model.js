const { model, Schema } = require('mongoose');

const userSchema = Schema({
  email: String,
  password: String,
  name: String,
  lastName: String,
  cart: Array,
  isAdmin: Boolean
});

userSchema.methods.isValidPassword = function isValidPassword(password) {
  return password === this.password;
};

module.exports = model('User', userSchema);
