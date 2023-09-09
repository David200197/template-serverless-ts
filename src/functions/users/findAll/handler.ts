import { formatJSONResponse } from "@/libs/api-gateway";
import { APIGatewayProxyEvent, Context } from "aws-lambda";
import { getUserService } from "@/modules/users";

export const main = async (event: APIGatewayProxyEvent, context: Context) => {
  try {
    const userService = getUserService();
    const data = await userService.findAll();

    return formatJSONResponse({
      data,
    });
  } catch (error) {
    return formatJSONResponse({
      error: error.message,
    });
  }
};
