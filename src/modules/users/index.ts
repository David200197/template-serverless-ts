import { UserService } from "./models/user.service";
import { USER_TOKENS } from "./tokens";
import { container } from "./di";

export const getUserService = () => {
  return container.get<UserService>(USER_TOKENS.SERVICE);
};
