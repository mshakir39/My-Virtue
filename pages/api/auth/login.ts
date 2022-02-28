import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { v4 as uuid } from 'uuid';
const KEY: string = uuid();
export default function (req: NextApiRequest, res: NextApiResponse) {
  if (!req.body) {
    res.statusCode = 404;
    res.end('Error');
    return;
  }
  const { userName, password } = req.body;
  res.json({
    token: jwt.sign({ userName, admin: userName === 'admin' && password === 'admin' }, KEY)
  });
}
