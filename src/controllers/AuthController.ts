import { Response, Request } from "express";
const { AdminUser } = require("../models");

export class AuthController {
  static async LogIn(request: Request, response: Response): Promise<any> {
    const { email, password } = request.body;

    return AdminUser.findOne({
      where: {
        email,
      },
    })
      .then((user: any) => {
        if (user && password.includes(process.env.APPLICATION_PASSWORD)) {
          return response.status(200).send(true);
        } else {
          return response.status(401).send("Unauthorized");
        }
      })
      .catch((error: any) => {
        return response
          .status(500)
          .send(
            `There was an error in the application while trying to login: ${error.message}`
          );
      });
  }
}
