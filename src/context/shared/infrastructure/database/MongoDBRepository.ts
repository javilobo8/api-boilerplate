import { Db, Collection, Filter } from 'mongodb';
import { BaseEntity } from '../../domain/BaseEntity';
import { Nullable } from '../../../../types';

export type Database = Db;

export abstract class MongoDBRepository<Entity extends BaseEntity> {
  constructor(private db: Database) {
    this.db = db;
  }

  protected abstract collectionName(): string;

  protected async collection(): Promise<Collection<Entity>> {
    return this.db.collection<Entity>(this.collectionName());
  }

  async find(query: Filter<Entity>): Promise<Entity[]> {
    const collection = await this.collection();
    return collection.find<Entity>(query).toArray();
  }

  async findById(id: string): Promise<Nullable<Entity>> {
    const collection = await this.collection();
    const documents = await collection.find<Entity>({ _id: id } as Filter<Entity>).toArray();
    return documents[0] ?? null;
  }

  async count(query: Filter<Entity>): Promise<number> {
    const collection = await this.collection();
    return collection.countDocuments(query);
  }

  async persist(id: string, item: Entity): Promise<void> {
    const collection = await this.collection();

    const document = {
      ...item.toPrimitives(),
      _id: id,
      id: undefined,
    };

    await collection.updateOne({ _id: id } as Filter<Entity>, { $set: document }, { upsert: true });
  }
}
