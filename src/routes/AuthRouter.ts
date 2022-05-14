import { AuthController } from './../controllers/AuthController';
import { Router } from 'express'

const AuthRouter = Router()

AuthRouter.post('/log-in', AuthController.LogIn)

export default AuthRouter
