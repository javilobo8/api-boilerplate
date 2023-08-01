import { lobobotDB } from './database';
import { UserRepository } from './context/user/domain/user.repository';

export const userRepository = new UserRepository(lobobotDB);