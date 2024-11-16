import { Router } from 'express';
import { authController } from '../controllers/auth.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const auth = Router();

auth.post('/register', ctrlWrapper(authController));

export default auth;
