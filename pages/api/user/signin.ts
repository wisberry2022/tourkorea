import mongoose from "mongoose";
import nextConnect from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import { ResponseData } from "../../../interfaceSet/Interface";
import { getJWToken } from "../../../interfaceSet/backendFuncSet/verifyFunc";
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const signinHandler = nextConnect<NextApiRequest, NextApiResponse>();
const SECRET_KEY = process.env.NEXT_PUBLIC_JWT_SECRET_KEY;

// const getJWToken = (id: string, email: string, secretKey: string) => {
//   const accessToken = jwt.sign(
//     {
//       id: id,
//       email: email,
//     },
//     secretKey,
//     {
//       expiresIn: "100m",
//     }
//   )
//   return accessToken;
// }

signinHandler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const SignIn = mongoose.models.User;
  const { id: uid, pwd } = req.body;
  SignIn.findOne({ id: uid })
    .then((r) => {
      if (r === null) {
        // console.log('로그인 실패! - 아이디 불일치')
        const resData = new ResponseData<string>(false, 'DENY', '일치하지 않는 아이디입니다!')
        res.status(400).send(resData);
      } else {
        bcrypt.compare(pwd, r.pwd, async (err: any, result: any) => {
          if (result) {
            // console.log('로그인 성공!')
            const accessToken = getJWToken(r.id, r.email, SECRET_KEY as string);
            const resData = new ResponseData<string>(true, accessToken, 'NONE')
            res.status(200).send(resData);
          } else {
            // console.log('로그인 실패! - 비밀번호 불일치', err)
            const resData = new ResponseData<string>(false, 'DENY', '일치하지 않는 비밀번호입니다!')
            res.status(400).send(resData);
          }
        })
      }
    })
})

export default signinHandler;