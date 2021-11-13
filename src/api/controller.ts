import { Request, Response } from 'express'
import { presenter } from './presenter'
import { createLink } from '../queries/links'

const createLinkCtrl = async (req: Request, res: Response) => {
  const link = await createLink(req.user.id, req.body.name, req.body.link)

  res.send({
    status: 200,
    message: 'Link created successfully',
    result: presenter(link)
  })
}

export {
  createLinkCtrl
}
