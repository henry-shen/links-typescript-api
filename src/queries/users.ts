import { User } from '../database/entities/user'
import { getRepository } from 'typeorm'
import { mockFindCredentials, mockFindUser } from '../mocks/mocks'
import { config } from '../config'

const findUser = async (username: string) => {
  if (config.useMockDatabase) return mockFindUser(username)

  const userRepository = getRepository(User)
  return await userRepository.findOne({
    where: {
      username: username
    }
  })
}

const findByUserCredentials = async (credentials: {
  username: string
  password: string
}) => {
  if (config.useMockDatabase) return mockFindCredentials(credentials)

  const userRepository = getRepository(User)
  return await userRepository.findOne({
    where: {
      username: credentials.username,
      password: credentials.password
    }
  })
}

export { findUser, findByUserCredentials }
