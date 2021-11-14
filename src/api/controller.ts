import { Request, Response } from 'express'
import { presenter, getAllUserLinksPresenter } from './presenter'
import { createLink, findLinksByUserIdSortedByDate } from '../queries/links'
import { findUser } from '../queries/users'
import { NotFoundError, ServerError } from '../middleware/errorHandler'

const fetchUserLinksController = async (req: Request, res: Response, next: Function) => {
  try {
    // Find user and its related links eager loaded
    const user = await findUser(req.params.username)
    if (user === undefined) {
      return next(new NotFoundError('User not found.'))
    }

    if (req.query.sortBy?.toString() === 'dateCreated') {
      // Find links by userId sorted by date and update result to the user object
      user.links = await findLinksByUserIdSortedByDate(user.id)
    }

    res.send({
      status: 200,
      message: '',
      result: getAllUserLinksPresenter(user)
    })
  } catch (error) {
    return next(new ServerError('Database error.'))
  }
}

const createLinkController = async (req: Request, res: Response, next: Function) => {
  try {
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
  } catch (error) {
    return next(new ServerError('Database error.'))
  }
}

export {
  fetchUserLinksController as fetchUserLinks,
  createLinkController as createLink
}
