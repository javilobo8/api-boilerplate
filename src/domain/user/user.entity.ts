import { BaseEntity } from '../shared/BaseEntity';

export interface User extends BaseEntity {
  email?: string;
  password?: string;
}
