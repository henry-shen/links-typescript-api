import { Request, Response } from 'express'

export default (req: Request, res: Response, next: Function) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, account, Authorization'
  )
  res.header('Access-Control-Allow-Methods', 'POST, PATCH, GET, PUT, OPTIONS')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Vary', 'Origin')
  next()
}
