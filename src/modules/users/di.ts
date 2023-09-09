import "reflect-metadata";
import { Container } from "inversify";
import { UserService } from "./models/user.service";
import { UserBaseService } from "./services/user-base.service";
import { UserRepository } from "./models/users.repository";
import { UserMockRepository } from "./repositories/user-mock-repository";
import { USER_TOKENS } from "./tokens";

const container = new Container();
container.bind<UserService>(USER_TOKENS.SERVICE).to(UserBaseService);
container.bind<UserRepository>(USER_TOKENS.REPOSITORY).to(UserMockRepository);

export { container };
