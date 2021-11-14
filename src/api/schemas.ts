import * as s from 'strummer'

const fetchLinktreeSchema = {
  params: s.objectWithOnly({
    username: s.string()
  })
}

const createClassicLinkSchema = {
  body: s.objectWithOnly({
    name: s.string({
      max: 144
    }),
    data: s.url({})
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
        available: s.string()
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
        url: s.url({})
      })
    })
  })
}

export {
  fetchLinktreeSchema, createClassicLinkSchema, createShowsLinkSchema, createMusicPlayerSchema
}
