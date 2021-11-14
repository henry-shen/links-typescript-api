import * as s from 'strummer'
import urlRegex from 'url-regex'

describe('matcher url', () => {
  it('rejects a string', () => {
    expect(s.url().match('string')).toEqual([{
      message: 'should be a URL',
      path: '',
      value: 'string'
    }])
  })

  it('accepts urls', () => {
    expect(s.url().match('http://localhost:8000')).toEqual([])
    expect(s.url().match('https://www.example.com')).toEqual([])
    expect(s.url().match('https://linktr.ee/linktree')).toEqual([])
  })

  it('accepts urls with query params', () => {
    expect(s.url().match('https://linktr.ee/linktree?id=123')).toEqual([])
  })

  it('rejects incorrect urls', () => {
    expect(s.url().match('htt://linktr.ee/linktree?id=123')).toEqual([])
  })

  it('test', () => {
    // const urlRegex = /[^(http://www.|https://www.|http://|https://)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/

    expect(urlRegex({ exact: true, strict: false }).test('https://google.com/api?34535/534534?dfg=g&fg')).toEqual(true)
    expect(urlRegex({ exact: true, strict: false }).test('henry')).toEqual(false)
    expect(urlRegex({ exact: true, strict: false }).test('henryhttps://google.us.edi?34535/534534?dfg=g&fg')).toEqual(false)
    expect(urlRegex({ exact: true, strict: false }).test('gskinner.com/products/spl')).toEqual(true)
  })
})
