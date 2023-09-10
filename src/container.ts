import { lobobotDB } from './database';
import { UserRepositoryMongo } from './context/user/infrastructure/persistance/user.repository.mongo';

export const userRepository = new UserRepositoryMongo(lobobotDB);
