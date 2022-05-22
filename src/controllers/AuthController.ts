import { Response, Request } from "express";
import { AdminUser } from '../database/models/AdminUser'
const jwt = require('jsonwebtoken')

interface Token {
  preferred_username: string
}

export class AuthController {

  static generateToken(username: Token) {
    return jwt.sign(username, process.env.TOKEN_SECRET as string, { expiresIn: '86400s'})
  }

  static async LogIn(request: Request, response: Response): Promise<any> {
    const { username, password } = request.body;

    return AdminUser.findOne({
      where: {
        email: username,
      },
      attributes: ['id', 'name', 'email']
    })
      .then((user: any) => {
        if (user && password.includes(process.env.APPLICATION_PASSWORD)) {
          const token = AuthController.generateToken(
            {
              preferred_username: username
            }
          )
          response.set('Authorization', token)
        return response.status(200).send(user)
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
