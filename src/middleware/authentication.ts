import { Request, Response } from 'express'
import { findByUserCredentials } from '../queries/users'
import { UnauthorizedError } from './errorHandler'

export default async (req: Request, res: Response, next: Function): Promise<void> => {
  // make base path public
  if (req.path === '/' || req.path.startsWith('/users/')) {
    return next()
  }

  // check for basic auth header
  if (req.headers.authorization === undefined || !req.headers.authorization.startsWith('Basic ')) {
    return next(new UnauthorizedError('Missing Authorization Header'))
  }

  // verify user credentials
  const base64Credentials = req.headers.authorization.split(' ')[1]
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii')
  const [username, password] = credentials.split(':')
  const user = await findByUserCredentials(username, password)
  if (user === undefined) {
    return next(new UnauthorizedError('Invalid Authentication Credentials'))
  }

  // attach user to request object
  req.user = {
    id: user.id
  }

  return next()
}
