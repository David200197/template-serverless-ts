import { formatJSONResponse } from "@/libs/api-gateway";
import { APIGatewayProxyEvent, Context } from "aws-lambda";

export const main = async (event: APIGatewayProxyEvent, context: Context) => {
  try {
    //
  } catch (error) {
    return formatJSONResponse({
      error: error.message,
    });
  }
};
