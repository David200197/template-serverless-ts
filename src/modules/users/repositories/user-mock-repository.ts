import { injectable } from "inversify";
import { User } from "../entities/user";
import { Users } from "../entities/users";
import { findAllMock } from "../mock/find.all.mock";
import { UserEntity } from "../models/user.entity";
import { UsersEntity } from "../models/users.entity";
import { UserRepository } from "../models/users.repository";

@injectable()
export class UserMockRepository implements UserRepository {
  findAll = async (): Promise<UsersEntity> => {
    const users = findAllMock.map((user) => new User(user));
    return new Users(users);
  };
  findById = async (id: number): Promise<UserEntity> => {
    const user = findAllMock.find((user) => user.id === id);
    return new User(user);
  };
}
