import { User } from './user.entity';

export interface UserRepository {
  find(query: Record<string, unknown>): Promise<User[]>;
  findById(id: string): Promise<User | null>;
  // save(user: User): Promise<void>;
}
