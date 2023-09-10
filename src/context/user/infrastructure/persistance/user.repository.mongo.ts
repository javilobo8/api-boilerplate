import {
  Database,
  MongoDBRepository,
} from '../../../shared/infrastructure/database/MongoDBRepository';
import { User } from '../../domain/user.entity';
import { UserRepository } from '../../domain/user.repository';

export class UserRepositoryMongo extends MongoDBRepository<User> implements UserRepository {
  constructor(database: Database) {
    super(database);
  }

  protected collectionName(): string {
    return 'users';
  }
}
