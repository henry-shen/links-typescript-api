declare global {
  namespace Express {
    export interface Request {
      user: {
        id: string
      }
    }
  }
}

export { Response } from 'express'

export interface ILink {
  name: string
  link: string
}
