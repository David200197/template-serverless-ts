import { UserEntity } from "../models/user.entity";
import { UsersEntity } from "../models/users.entity";

export class Users implements UsersEntity {
  constructor(readonly value: UserEntity[]) {}
}
