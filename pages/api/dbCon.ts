
import nextConnect from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../db/db";
import User from "../db/models/User";
import { ResponseData } from "../../interfaceSet/Interface";

interface dbFunc {
  (): Promise<void>
}

const DBLink: dbFunc = async () => {
  await dbConnect();
  new User();
}

const dbhandler = nextConnect<NextApiRequest, NextApiResponse>();

dbhandler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const resData = new ResponseData<string>(true, 'OKAY', 'NONE')
  await DBLink();
  res.status(200).send(resData)
})

export default dbhandler;