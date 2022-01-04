import { HttpPostClientMock } from './../../test/mock-http-client'
import { RemoteAuthentication } from './remote-authentication'
import faker from 'faker'
import { mockAuthentication } from '../../../domain/test/mock-authentication'

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientMock
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientMock()
  const sut = new RemoteAuthentication(httpPostClientSpy, url)

  return {
    sut,
    httpPostClientSpy
  }
}

describe('Test Remote Authentication when', () => {
  it('Should call httpClient with correct URL', async () => {
    const url = faker.internet.url()
    const { httpPostClientSpy, sut } = makeSut(url)
    await sut.auth(mockAuthentication())

    expect(httpPostClientSpy.url).toBe(url)
  })

  it('Should call httpClient with correct body', async () => {
    const url = faker.internet.url()
    const fakeParams = mockAuthentication()
    const { httpPostClientSpy, sut } = makeSut(url)
    await sut.auth(fakeParams)

    expect(httpPostClientSpy.body).toEqual(fakeParams)
  })
})
