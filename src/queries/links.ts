import { Link } from '../database/entities/link'
import { getRepository } from 'typeorm'
import { mockCreateLink, mockFindLinks } from '../mocks/mocks'
import { config } from '../config'

const createLink = async (data: any) => {
  if (config.useMockDatabase) return mockCreateLink(data.name, data.type, data.data)

  const link = new Link()
  link.name = data.name
  link.data = data.data
  link.userId = data.userId
  link.type = data.type

  const linkRepository = getRepository(Link)
  return await linkRepository.save(link)
}

const findLinksByUserIdSortedByDate = async (userId: string) => {
  if (config.useMockDatabase) return mockFindLinks(userId)

  const linkRepository = getRepository(Link)
  return await linkRepository.find({
    where: {
      userId: userId
    },
    order: {
      createdAt: 'ASC'
    }
  })
}

export { createLink, findLinksByUserIdSortedByDate }
