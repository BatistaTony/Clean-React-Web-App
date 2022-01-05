import { HttpPostClientMock } from '@/data/test/mock-http-client'
import { RemoteAuthentication } from './remote-authentication'
import faker from 'faker'
import { mockAuthentication } from '@/domain/test/mock-authentication'
import { InvalidCredentialError } from '@/domain/erros/invalid-credential-error'
import { HttpResponseStatusCode } from '@/data/protocols/http/http-response'
import { UnExpectedError } from '@/domain/erros/unexpected-errors'

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

  it('Should throw invalid credential if status code 401', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const fakeParams = mockAuthentication()

    httpPostClientSpy.response = {
      statusCode: HttpResponseStatusCode.unauthorized
    }

    const promise = sut.auth(fakeParams)

    await expect(promise).rejects.toThrow(new InvalidCredentialError())
  })

  it('Should throw unexpected error if status code 400', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const fakeParams = mockAuthentication()

    httpPostClientSpy.response = {
      statusCode: HttpResponseStatusCode.badRequest
    }

    const promise = sut.auth(fakeParams)

    await expect(promise).rejects.toThrow(new UnExpectedError())
  })

  it('Should throw unexpected error if status code 500', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const fakeParams = mockAuthentication()

    httpPostClientSpy.response = {
      statusCode: HttpResponseStatusCode.serverError
    }

    const promise = sut.auth(fakeParams)

    await expect(promise).rejects.toThrow(new UnExpectedError())
  })

  it('Should throw unexpected error if status code 404', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const fakeParams = mockAuthentication()

    httpPostClientSpy.response = {
      statusCode: HttpResponseStatusCode.badRequest
    }

    const promise = sut.auth(fakeParams)

    await expect(promise).rejects.toThrow(new UnExpectedError())
  })
})
