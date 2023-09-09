import { UserEntity } from "../models/user.entity";

type Options = {
  id: number;
  fullname: string;
  age: number;
};

export class User implements UserEntity {
  readonly id: number;
  readonly fullname: string;
  readonly age: number;
  constructor(options: Options) {
    Object.assign(this, options);
  }
}
