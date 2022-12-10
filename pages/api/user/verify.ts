import nextConnect from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import { verifyAT } from "../../../interfaceSet/backendFuncSet/verifyFunc";
import { ClientResData, ResponseData } from "../../../interfaceSet/Interface";
import { resultData } from "../../../interfaceSet/Interface";


const verifyHandler = nextConnect<NextApiRequest, NextApiResponse>()

verifyHandler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const SECRET_KEY = process.env.NEXT_PUBLIC_JWT_SECRET_KEY;
  const jwt = req.headers.jwt_access_token;
  const vResult = verifyAT(SECRET_KEY as string, jwt as string);
  // console.log('ACCESS TOKEN 검증 결과', vResult);
  if (vResult.result) {
    const resData: ClientResData = new ResponseData<resultData>(vResult.result, vResult, 'NONE')
    res.status(200).send(resData);
  } else {
    const resData: ClientResData = new ResponseData<resultData>(vResult.result, vResult, '토큰이 만료되었습니다!');
    res.status(400).send(resData);
  }
})

export default verifyHandler;