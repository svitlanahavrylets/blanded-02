import createHttpError from 'http-errors';
import bcrypt from 'bcrypt';
import { UserCollection } from '../db/models/user.js';

export const registerUser = async (body) => {
  const user = await UserCollection.findOne({
    email: body.email,
  });
  if (user) throw createHttpError(409, 'Email in use');

  const encryptedPassword = await bcrypt.hash(body.password, 10);
  return await UserCollection.create({
    ...body,
    password: encryptedPassword,
  });
};
