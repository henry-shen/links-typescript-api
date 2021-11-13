import * as s from 'strummer'

const fetchLinkSchema = {
  params: s.objectWithOnly({
    id: s.string()
  })
}

const createLinkSchema = {
  body: s.objectWithOnly({
    name: s.string(),
    link: s.string()
  })
}

export {
  fetchLinkSchema, createLinkSchema
}
