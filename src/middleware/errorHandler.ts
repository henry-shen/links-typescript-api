import { Request, Response, ErrorRequestHandler } from 'express'

interface Error {
    message?: string
    details?: []
}

export default (err: Error, req: Request, res: Response, next: Function) => {
    if (err) res.status(400).json({
        status: 400,
        message: err.message,
        errors: err.details
    })
}