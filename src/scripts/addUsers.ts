import createDatabaseConnection from '../database'
import { getRepository } from 'typeorm'
import { User } from '../database/entities/user'

const addUsers = async () => {
  const userRepository = getRepository(User)
  const admin = await userRepository.findOne({
    where: { username: 'admin' }
  })
  if (admin === undefined) {
    await userRepository.save({ username: 'admin', password: 'admin' })
    console.log('New user created: admin')
  }
  const henry = await userRepository.findOne({
    where: { username: 'henry' }
  })
  if (henry === undefined) {
    await userRepository.save({ username: 'henry', password: 'henry' })
    console.log('New user created: henry')
  }
}

createDatabaseConnection
  .then(addUsers)
  .then(() => {
    console.log('Done')
    process.exit(0)
  })
  .catch((err: Error) => {
    console.log(err)
    process.exit(1)
  })
