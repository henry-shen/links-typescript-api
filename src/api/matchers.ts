import * as s from 'strummer'
import urlRegex from 'url-regex'

export const customURL = (): s.Matcher =>
  s.createMatcher({
    match: (path, url) => {
      const boolean = urlRegex({ exact: true, strict: false }).test(url)
      if (!boolean) return 'should be a URL'
    },
    toJSONSchema: () => {
      return {
        type: 'string',
        format: 'url'
      }
    }
  })()
