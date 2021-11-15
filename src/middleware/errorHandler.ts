import { Request, Response } from 'express'

interface CustomError extends Error {
  details?: []
}

class HTTPError extends Error {
  public readonly code
  public readonly responseJson
  constructor (code: number, message: string, errors?: Error[]) {
    super(message)
    Error.captureStackTrace(this, HTTPError)
    this.code = code
    this.responseJson = {
      status: code,
      message: message,
      errors: errors ?? [message]
    }
  }
}

class InvalidRequestError extends HTTPError {
  constructor (message: string, errors?: Error[]) {
    super(400, message, errors)
  }
}

class UnauthorizedError extends HTTPError {
  constructor (message: string, errors?: Error[]) {
    super(401, message, errors)
  }
}

class NotFoundError extends HTTPError {
  constructor (message: string, errors?: Error[]) {
    super(404, message, errors)
  }
}

class ServerError extends HTTPError {
  constructor (message: string, errors?: Error[]) {
    super(500, message, errors)
  }
}

export const errorHandler = async (err: HTTPError | CustomError, req: Request, res: Response, next: Function) => {
  // Handle errors coming from request validator
  if (!(err instanceof HTTPError) && err.details !== undefined) {
    err = new InvalidRequestError(err.message ?? '', err.details)
  } else if (!(err instanceof HTTPError)) {
    err = new ServerError('Unexpected Error.')
  }

  const httpError = err as HTTPError
  if (err instanceof HTTPError) {
    res.status(httpError.code).json(httpError.responseJson)
  } else {
    res.status(500).json({ status: 500, message: 'Unhandled error.' })
  }
}

export {
  UnauthorizedError,
  NotFoundError,
  ServerError
}
