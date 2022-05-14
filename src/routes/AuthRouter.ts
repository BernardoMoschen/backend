import { AuthController } from './../controllers/AuthController';
import { Router } from 'express'

const AuthRouter = Router()

AuthRouter.post('/login', AuthController.LogIn)

export default AuthRouter
