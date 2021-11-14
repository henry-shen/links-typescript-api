import { User } from '../database/entities/user'
import { getRepository } from 'typeorm'

const findUser = async (username: string) => {
  const userRepository = getRepository(User)
  return await userRepository.findOne({
    where: {
      username: username
    }
  })
}

const findByUserCredentials = async (username: string, password: string) => {
  const userRepository = getRepository(User)
  return await userRepository.findOne({
    where: {
      username: username,
      password: password
    }
  })
}

export { findUser, findByUserCredentials }
