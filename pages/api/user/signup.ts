import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import dbConnect from '../../db/db';
import User from '../../db/models/User';

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
  console.log(req.body)
})

export default handler;