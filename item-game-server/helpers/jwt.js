const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

const tokenGenerator = (user) => {
  const { email, name, avatar } = user;
  const token = jwt.sign({
    email, name, avatar,
  }, secretKey)
  return token;
}

const tokenVerifier = (token) => {
  const decoded = jwt.verify(token, secretKey);
  return decoded;
}

module.exports = {
  tokenGenerator, tokenVerifier
}