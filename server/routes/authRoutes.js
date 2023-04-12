import express from 'express'

const router = express.Router()

import { loginUser, registerUser } from '../controllers/authControllers.js'

router.post('/login' , loginUser)
router.post('/register', registerUser)

export default router
