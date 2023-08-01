import { userRepository } from '../../../container';

export default async function getById({ id }: { id: string }) {
  const user = await userRepository.findById(id);
}
