const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  authMiddleware: function (context, next) { // Add 'next' as an argument
    // Skip authentication for the signup mutation
    if (context.req.body?.operationName === 'signup'||context.req.body?.operationName === 'login') { // Use 'context.req' to access the 'req' object
      context.user = null; // No token required for signup
      return next();
    }

    // allows token to be sent via headers
    const token = context.req.headers.authorization;

    if (!token) {
      throw new Error('You have no token!');
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      context.user = data;
    } catch (err) {
      console.error('Invalid token', err);
      throw new Error('Invalid token!');
    }

    return next(); // Call 'next' after successful authentication
  },

  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
