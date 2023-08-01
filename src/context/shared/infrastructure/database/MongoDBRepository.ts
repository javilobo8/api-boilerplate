import { Db, Collection, WithId, Filter } from 'mongodb';
import { BaseEntity } from '../../domain/BaseEntity';
import { Nullable } from '../../../../types';

export type Database = Db;

interface RepositoryBase<Entity> {
  find(query: Record<string, unknown>): Promise<Entity[]>;
  // findById(id: string): Promise<Entity | null>;
}

export class MongoDBRepository<Entity extends BaseEntity>
  implements RepositoryBase<WithId<Entity>>
{
  private collection: Collection<Entity>;

  constructor(private db: Database, private collectionName: string) {
    this.collection = this.db.collection<Entity>(this.collectionName);
  }

  async find(query: Filter<Entity>): Promise<WithId<Entity>[]> {
    return this.collection.find<WithId<Entity>>(query).toArray();
  }

  async findById(id: string): Promise<Nullable<WithId<Entity>>> {
    const result = await this.find({ id });
    return result[0] ?? null;
  }
}
