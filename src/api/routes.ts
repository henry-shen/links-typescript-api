import express from 'express'
import { fetchLinkCtrl, createLinkCtrl } from './controller'

import requestValidator from '../middleware/strummer'
import { createLinkSchema, fetchLinkSchema } from './schemas'

const router = express.Router()

// router.get('/', (req, res) => res.send('Express + TypeScript Server'))
router.get('/link/:id', [requestValidator(fetchLinkSchema), fetchLinkCtrl])
router.post('/link', [requestValidator(createLinkSchema), createLinkCtrl])

export default router
