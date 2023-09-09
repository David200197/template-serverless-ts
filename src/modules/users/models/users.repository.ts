import { UserEntity } from "./user.entity";
import { UsersEntity } from "./users.entity";

export interface UserRepository {
  findAll(): Promise<UsersEntity>;
  findById(id: number): Promise<UserEntity>;
}
