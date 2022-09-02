import jwt from "jsonwebtoken";

const secret = "mysecretssshhhhhhh";
const expiration = "2h";
export const signToken = function ({ email, username, _id }) {
  const payload = { email, username, _id };
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};
