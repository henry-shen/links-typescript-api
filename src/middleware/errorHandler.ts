import { Request, Response } from 'express'

interface Error {
  message?: string
  details?: []
}

export default (err: Error, req: Request, res: Response, next: Function) => {
  if (err !== undefined) {
    res.status(400).json({
      status: 400,
      message: err.message,
      errors: err.details
    })
  }
}
