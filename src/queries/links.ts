import { Link } from '../database/entities/link'
import { getRepository } from 'typeorm'

const createLink = async (data: any) => {
  const link = new Link()
  link.name = data.name
  link.data = data.data
  link.userId = data.userId
  link.type = data.type

  const linkRepository = getRepository(Link)
  return await linkRepository.save(link)
}

export { createLink }
