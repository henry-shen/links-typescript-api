import { Request, Response } from 'express'
import { presenter } from './presenter'
import { createLink } from '../queries/links'

const fetchLinkCtrl = async (req: Request, res: Response) => {
  const link: any = {
    name: 'Example link',
    url: 'https://example.com'
  }
  res.send({
    status: 200,
    message: '',
    result: presenter(link)
  })
}

const createLinkCtrl = async (req: Request, res: Response) => {
  const link = await createLink(req.user.id, req.body.name, req.body.link)

  res.send({
    status: 200,
    message: 'Link created successfully',
    result: presenter(link)
  })
}

export {
  fetchLinkCtrl, createLinkCtrl
}
