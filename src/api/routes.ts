import express from 'express'
import { fetchUserLinks, createLink } from './controller'
import requestValidator from '../middleware/requestValidator'
import {
  fetchUserLinksSchema,
  createClassicLinkSchema,
  createShowsLinkSchema,
  createMusicPlayerSchema
} from './schemas'
import { NotFoundError } from '../middleware/errorHandler'

const router = express.Router()

router.get('/', (req, res) => res.send('Express + TypeScript Server'))
router.get('/users/:username', [requestValidator(fetchUserLinksSchema), fetchUserLinks])
router.post('/links/classic', [requestValidator(createClassicLinkSchema), createLink])
router.post('/links/shows-list', [requestValidator(createShowsLinkSchema), createLink])
router.post('/links/music-player', [requestValidator(createMusicPlayerSchema), createLink])
router.use(async (req, res, next) => {
  if (req.route === undefined) {
    return next(new NotFoundError('Not found.'))
  }
})

export default router
