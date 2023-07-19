import { UserRepository } from './domain/user/user.repository';
import { MongoDBConnection } from './infrastructure/database/MongoDBConnection';

const url = 'mongodb://localhost:27017';
const dbName = 'lobobot';

const connection = new MongoDBConnection(url);
const lobobotDB = connection.getDB(dbName);

const userRepository = new UserRepository(lobobotDB);

userRepository.find({}).then((users) => {
  console.log(users);
});
