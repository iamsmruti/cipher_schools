import express from 'express'
import { verify } from '../middlewares/verification.js'

import { userDetails, updateUserDetails } from '../controllers/userControllers.js'

const router = express.Router()

router.get('/', verify ,userDetails)
router.put('/', verify, updateUserDetails)

export default router