import { HttpPostClientSpy } from './../../test/mock-http-client'
import { RemoteAuthentication } from './remote-authentication'

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = 'some_url'): SutTypes =>  {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(httpPostClientSpy, url)

  return {
    sut,
    httpPostClientSpy
  }
}

describe('Test Remote Authentication when', () => {
  it('Should call httpClient with correct URL', async () => {
    const url = 'another_url'
    const { httpPostClientSpy, sut } = makeSut(url)
    await sut.auth()

    expect(httpPostClientSpy.url).toBe(url)
  })
})
