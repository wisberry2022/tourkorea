import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import { ResponseData } from '../../../interfaceSet/Interface';
import nextConnect from 'next-connect';
import dbConnect from '../../db/db';
import User from '../../db/models/User';
const bcrypt = require('bcrypt');

interface dbFunc {
  (): Promise<void>
}

const DBLink: dbFunc = async () => {
  await dbConnect();
  new User();
}

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  await DBLink();
  const signUpData = req.body
  const SignUp = mongoose.models.User;
  const saltRounds = 10;
  // id 중복검사
  SignUp.findOne({ id: signUpData.id })
    .then(r => {
      if (r === null) {
        // email 중복검사
        SignUp.findOne({ email: signUpData.email })
          .then(r2 => {
            if (r2 === null) {
              const resResult = new ResponseData<string>(true, "OKAY", "NONE")
              bcrypt.genSalt(saltRounds, (err: any, salt: any) => {
                bcrypt.hash(signUpData.pwd, salt, (err: any, hash: any) => {
                  SignUp.insertMany({
                    id: signUpData.id,
                    pwd: hash,
                    email: signUpData.email,
                    tel: signUpData.tel,
                    address: signUpData.address,
                  })
                    .then(() => {
                      res.send(resResult)
                    })
                })

              })
              console.log('등록 성공!')
            } else {
              console.log('이미 등록된 이메일입니다!')
              const resResult = new ResponseData<string>(false, "DENY", "이미 등록된 이메일입니다!");
              res.status(400).send(resResult);
            }
          })
      } else {
        console.log('이미 등록된 아이디입니다!')
        const resResult = new ResponseData<string>(false, "DENY", "이미 등록된 아이디입니다!");
        res.status(400).send(resResult);
      }
    });

})

export default handler;