import { Link } from '../database/entities/link'
import { getRepository } from 'typeorm'

const createLink = async (userId: string, name: string, url: string) => {
  const link = new Link()
  link.name = name
  link.url = url
  link.userId = userId

  const linkRepository = getRepository(Link)
  return await linkRepository.save(link)
}

export { createLink }
