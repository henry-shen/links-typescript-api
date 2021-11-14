import { Request, Response } from 'express'
import { presenter, userPresenter } from './presenter'
import { createLink } from '../queries/links'
import { fetchUserLinks } from '../queries/users'
import { NotFoundError, ServerError } from '../middleware/errorHandler'

const fetchUserLinksCtrl = async (req: Request, res: Response, next: Function) => {
  try {
    const user = await fetchUserLinks(req.params.username)
    if (user === undefined) {
      return next(new NotFoundError('User not found.'))
    }

    res.send({
      status: 200,
      message: 'Link created successfully',
      result: userPresenter(user)
    })
  } catch (error) {
    return next(new ServerError('Database error.'))
  }
}

const createLinkCtrl = async (req: Request, res: Response) => {
  const link = await createLink({
    userId: req.user.id,
    name: req.body.name,
    type: req.path.slice(7),
    data: req.body.data
  })

  res.status(201).send({
    status: 201,
    message: 'Link created successfully',
    result: presenter(link)
  })
}

export {
  fetchUserLinksCtrl, createLinkCtrl
}
