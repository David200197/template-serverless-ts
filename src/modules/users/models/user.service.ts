import { UserEntity } from "./user.entity";
import { UsersEntity } from "./users.entity";

export interface UserService {
  findAll(): Promise<UsersEntity>;
  findOneById(id: number): Promise<UserEntity>;
}
