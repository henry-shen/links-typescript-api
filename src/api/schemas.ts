import * as s from 'strummer'

const fetchLinkSchema = {
    params: s.objectWithOnly({
        id: s.string()
    })
    // body: s({ id: 'uuid', name: 'string', age: 'number' })
}

export {
    fetchLinkSchema
}