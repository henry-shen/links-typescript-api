import { User } from '../database/entities/user'
import { getRepository } from 'typeorm'

const fetchUserLinks = async (username: string) => {
  const userRepository = getRepository(User)
  return await userRepository.findOne({
    where: {
      username: username
    }
  })
}

const authenticateUser = async (username: string, password: string) => {
  const userRepository = getRepository(User)
  return await userRepository.findOne({
    where: {
      username: username,
      password: password
    }
  })
}

export { fetchUserLinks, authenticateUser }
