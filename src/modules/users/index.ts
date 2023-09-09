import { UserService } from "./models/user.service";
import { USER_TOKENS } from "./tokens";
import { usersContainer } from "./di";

export const getUserService = () => {
  return usersContainer.get<UserService>(USER_TOKENS.SERVICE);
};
