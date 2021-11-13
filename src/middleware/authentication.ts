import { Request, Response } from 'express'
import { authenticateUser } from '../queries/users'

export default async (req: Request, res: Response, next: Function) => {
  // make authenticate path public
  // if (req.path === '/') {
  //   next()
  // }

  // check for basic auth header
  if (req.headers.authorization === undefined || !req.headers.authorization.includes('Basic ')) {
    return res.status(401).json({
      status: 401,
      message: 'Missing Authorization Header'
    })
  }

  // verify auth credentials
  const base64Credentials = req.headers.authorization.split(' ')[1]
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii')
  const [username, password] = credentials.split(':')
  const user = await authenticateUser(username, password)
  if (user === undefined) {
    return res.status(401).json({
      status: 401,
      message: 'Invalid Authentication Credentials'
    })
  }

  // attach user to request object
  req.user = {
    id: user.id
  }

  next()
}
