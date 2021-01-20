/* eslint-disable consistent-return */
import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    delete user.password;

    response.json(user);
  } catch (err) {
    response.status(400).json({ error: err.message });
  }
});

export default usersRouter;
