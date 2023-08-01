import { BaseEntity } from '../../shared/domain/BaseEntity';

export interface User extends BaseEntity {
  email?: string;
  password?: string;
}
