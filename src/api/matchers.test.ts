import { customURL } from './matchers'

describe('matcher url', () => {
  test('accepts urls', () => {
    expect(customURL().match('http://localhost:8000')).toEqual([])
    expect(customURL().match('https://www.example.com')).toEqual([])
    expect(customURL().match('https://linktr.ee/linktree')).toEqual([])
    expect(customURL().match('linktr.ee/linktree')).toEqual([])
  })

  test('accepts urls with query params', () => {
    expect(customURL().match('https://linktr.ee/linktree?id=123')).toEqual([])
  })

  test('rejects incorrect urls', () => {
    expect(customURL().match('string')).toEqual([{
      message: 'should be a URL',
      path: '',
      value: 'string'
    }])
    expect(customURL().match('htp//linktr.ee/linktree?id=123')).toEqual([{
      message: 'should be a URL',
      path: '',
      value: 'htp//linktr.ee/linktree?id=123'
    }])
  })
})
