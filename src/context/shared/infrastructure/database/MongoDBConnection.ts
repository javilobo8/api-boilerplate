import { MongoClient } from 'mongodb';

abstract class DatabaseConnection {
  abstract connect(): Promise<void>;
}

export class MongoDBConnection extends DatabaseConnection {
  private client: MongoClient;

  constructor(url: string) {
    super();
    this.client = new MongoClient(url);
  }

  async connect() {
    await this.client.connect();
    console.log('Connected successfully to mongodb');
  }

  getDB(dbName: string) {
    return this.client.db(dbName);
  }

  async close() {
    await this.client.close();
  }
}
