import { userRepository } from '../../../container';
import { User } from '../domain/user.entity';

interface UserGetByIdParams {
  id: string;
}

export async function getById({ id }: UserGetByIdParams): Promise<User> {
  const user = await userRepository.findById(id);

  if (!user) {
    throw new Error('User not found');
  }

  return user;
}
