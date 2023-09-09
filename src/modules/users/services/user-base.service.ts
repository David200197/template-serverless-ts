import { inject, injectable } from "inversify";
import { UserEntity } from "../models/user.entity";
import { UserService } from "../models/user.service";
import { UsersEntity } from "../models/users.entity";
import { UserRepository } from "../models/users.repository";
import { USER_TOKENS } from "../tokens";

@injectable()
export class UserBaseService implements UserService {
  constructor(
    @inject(USER_TOKENS.REPOSITORY)
    private readonly userRepository: UserRepository
  ) {}

  findAll = async (): Promise<UsersEntity> => {
    return await this.userRepository.findAll();
  };

  findOneById = async (id: number): Promise<UserEntity> => {
    return await this.userRepository.findById(id);
  };
}
