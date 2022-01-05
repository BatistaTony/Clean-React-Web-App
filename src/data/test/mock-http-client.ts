import { HttpPostClient, ParamsPosttType } from 'data/protocols/http/http-post-client'
import { HttpResponseStatusCode, HttpResponseType } from '../protocols/http/http-response'

export class HttpPostClientMock implements HttpPostClient {
  url?: string
  body?: Object
  response: HttpResponseType = {
    statusCode: HttpResponseStatusCode.noContent
  }

  async post (params: ParamsPosttType): Promise<HttpResponseType> {
    this.url = params.url
    this.body = params.body
    return await Promise.resolve(this.response)
  }
}
