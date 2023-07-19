import { MongoDBRepository, Database } from '../../infrastructure/database/MongoDBRepository';
import { User } from './user.entity';

export class UserRepository extends MongoDBRepository<User> {
  public static collectionName = 'users';
  constructor(database: Database) {
    super(database, UserRepository.collectionName);
  }
}
