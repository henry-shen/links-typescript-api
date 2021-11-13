import express from 'express'
import { createLinkCtrl } from './controller'

import requestValidator from '../middleware/strummer'
import { createLinkSchema } from './schemas'

const router = express.Router()

router.get('/', (req, res) => res.send('Express + TypeScript Server'))
router.post('/link', [requestValidator(createLinkSchema), createLinkCtrl])

export default router
