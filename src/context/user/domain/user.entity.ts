import { BaseEntity } from '../../shared/domain/BaseEntity';

export class User extends BaseEntity {
  readonly id: string;
  readonly email: string;
  readonly password: string;

  public static create(id: string, email: string, password: string) {
    return new User(id, email, password);
  }

  public static fromPrimitives(plainData: { id: string; email: string; password: string }) {
    return new User(plainData.id, plainData.email, plainData.password);
  }

  constructor(id: string, email: string, password: string) {
    super();
    this.id = id;
    this.email = email;
    this.password = password;
  }

  toPrimitives() {
    return {
      id: this.id,
      email: this.email,
      password: this.password,
    };
  }
}
