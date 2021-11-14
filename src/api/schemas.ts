import * as s from 'strummer'
import { customURL } from './matchers'

const fetchUserLinksSchema = {
  params: s.objectWithOnly({
    username: s.string()
  }),
  query: s.objectWithOnly({
    sortBy: s.optional(s.enum({
      type: 'string',
      values: ['dateCreated']
    }))
  })
}

const createClassicLinkSchema = {
  body: s.objectWithOnly({
    name: s.string({
      max: 144
    }),
    data: customURL()
  })
}

const createShowsLinkSchema = {
  body: s.objectWithOnly({
    name: s.string({
      max: 144
    }),
    data: s.array({
      of: s.objectWithOnly({
        date: s.isoDate({ time: false }),
        venue: s.string(),
        available: s.string(),
        url: s.optional(customURL())
      })
    })
  })
}

const createMusicPlayerSchema = {
  body: s.objectWithOnly({
    name: s.string({
      max: 144
    }),
    data: s.array({
      of: s.objectWithOnly({
        platform: s.string(),
        url: customURL()
      })
    })
  })
}

export {
  fetchUserLinksSchema, createClassicLinkSchema, createShowsLinkSchema, createMusicPlayerSchema
}
