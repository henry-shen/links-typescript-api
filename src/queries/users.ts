import { User } from '../database/entities/user'
import { getRepository } from 'typeorm'

const findUser = async (id: string) => {
  const userRepository = getRepository(User)
  return await userRepository.findOne(id)
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

export { findUser, authenticateUser }
