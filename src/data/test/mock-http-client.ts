import { HttpPostClient, ParamsPosttType } from 'data/protocols/http/http-post-client'

export class HttpPostClientMock implements HttpPostClient {
  url?: string

  async post (params: ParamsPosttType): Promise<void> {
    this.url = params.url
    return await Promise.resolve()
  }
}
