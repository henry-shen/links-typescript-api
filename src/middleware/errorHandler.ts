import { Request, Response } from 'express'

interface Error {
  message?: string
  details?: []
}

export class HTTPError extends Error {
  private readonly code
  private readonly errors
  private readonly responseJson
  constructor (code: number, message: string, errors: Error[] | undefined) {
    super(message)
    Error.captureStackTrace(this, HTTPError)
    this.code = code
    this.errors = errors ?? [message]
    this.responseJson = {
      status: this.code,
      message: this.message,
      errors: this.errors
    }
  }
}

class InvalidRequestError extends HTTPError {
  constructor (message: string, errors: Error[]) {
    super(400, message, errors)
  }
}

class UnauthorizedError extends HTTPError {
  constructor (message: string, errors: Error[]) {
    super(401, message, errors)
  }
}

export const errorHandler = (err: Error, req: Request, res: Response, next: Function) => {
  if (err.details !== undefined) {
    res.status(400).json({
      status: 400,
      message: err.message ?? '',
      errors: err.details
    })
  }

  return next()
}

export const errors = {
  InvalidRequestError: InvalidRequestError,
  UnauthorizedError: UnauthorizedError
}
