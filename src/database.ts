import { MongoDBConnection } from './context/shared/infrastructure/database/MongoDBConnection';

const url = 'mongodb://localhost:27017';
const dbName = 'lobobot';

const connection = new MongoDBConnection(url);
export const lobobotDB = connection.getDB(dbName);
