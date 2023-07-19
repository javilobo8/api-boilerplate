import { Db, Collection, WithId, Filter } from 'mongodb';
import { Nullable } from '../../types';
import { BaseEntity } from '../../domain/shared/BaseEntity';

export type Database = Db;

interface RepositoryBase<Entity> {
  find(query: Record<string, unknown>): Promise<Entity[]>;
  findById(id: string): Promise<Entity | null>;
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

  async findById(id: unknown): Promise<Nullable<WithId<Entity>>> {
    return this.collection.findOne<WithId<Entity>>({ id });
  }
}
