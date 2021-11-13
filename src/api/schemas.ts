import * as s from 'strummer'

const fetchLinkSchema = {
  params: s.objectWithOnly({
    id: s.string()
  })
}

const createLinkSchema = {
  body: s.objectWithOnly({
    name: s.string({
      max: 144
    }),
    link: s.url({})
  })
}

export {
  fetchLinkSchema, createLinkSchema
}
