import { resultData } from "../Interface";
const jwt = require('jsonwebtoken');

export const verifyAT = (secretKey: string, Token: string): resultData => {
  const vResult = jwt.verify(Token, secretKey, (err: any, decoded: any) => {
    if (err) {
      return {
        result: false,
        uid: null,
        email: null,
      }
    } else {
      return {
        result: true,
        uid: decoded.id,
        email: decoded.email,
      }
    }
  })
  return vResult;
}