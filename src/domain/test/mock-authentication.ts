import { AuthParams } from '@/domain/usecases/authentication'
import faker from 'faker'

export const mockAuthentication = (): AuthParams => ({
  password: faker.internet.email(),
  email: faker.internet.password()
})
