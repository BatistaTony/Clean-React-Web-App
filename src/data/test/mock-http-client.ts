import { HttpPostClient, ParamsPosttType } from 'data/protocols/http/http-post-client'

export class HttpPostClientMock implements HttpPostClient {
  url?: string
  body?: Object

  async post (params: ParamsPosttType): Promise<void> {
    this.url = params.url
    this.body = params.body
    return await Promise.resolve()
  }
}
