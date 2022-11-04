import { AuthRepository } from '~/repositories/authRepository'
import { UsersRepository } from '~~/repositories/usersRepository'
import { ContactRepository } from '~~/repositories/contactRepository'

export interface Repositories {
  auth: typeof AuthRepository
  users: typeof UsersRepository
  contact: typeof ContactRepository
}

const repositories: Repositories = {
  auth: AuthRepository,
  users: UsersRepository,
  contact: ContactRepository,
}

export const apiRepositoryFactory = {
  get: (key: string) => new repositories[key](),
}
