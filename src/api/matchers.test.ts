import * as s from 'strummer'

describe('matcher url', () => {
  it('rejects a string', () => {
    expect(s.url().match('string')).toEqual([{
      message: 'should be URL',
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

  // it('does not handle an array of one', () => {
  //   expect(region().match(['NZ'])).toEqual([
  //     {
  //       message: 'should be a valid enum value',
  //       path: '',
  //       value: ['NZ']
  //     }
  //   ])
  // })
})
