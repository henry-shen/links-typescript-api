import express from 'express'
import { fetchUserLinksCtrl, createLinkCtrl } from './controller'
import requestValidator from '../middleware/strummer'
import {
  fetchLinktreeSchema,
  createClassicLinkSchema,
  createShowsLinkSchema,
  createMusicPlayerSchema
} from './schemas'
import { NotFoundError } from '../middleware/errorHandler'

const router = express.Router()

router.get('/', (req, res) => res.send('Express + TypeScript Server'))
router.get('/users/:username', [requestValidator(fetchLinktreeSchema), fetchUserLinksCtrl])
router.post('/links/classic', [requestValidator(createClassicLinkSchema), createLinkCtrl])
router.post('/links/shows-list', [requestValidator(createShowsLinkSchema), createLinkCtrl])
router.post('/links/music-player', [requestValidator(createMusicPlayerSchema), createLinkCtrl])
router.use(async (req, res, next) => {
  if (req.route === undefined) {
    return next(new NotFoundError('Not found.'))
  }
})

export default router
