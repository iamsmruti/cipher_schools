import express from 'express'

const router = express.Router()

import { loginUser, registerUser } from '../controllers/authControllers.js'

router.post('/login' , loginUser)
router.put('/register', registerUser)

export default router
