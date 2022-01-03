import { HttpPostClientSpy } from './../../test/mock-http-client'
import { RemoteAuthentication } from './remote-authentication'

describe('Test Remote Authentication when', () => {
  it('Should call httpClient with correct URL', async () => {
    const url = 'some_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(httpPostClientSpy, url)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
