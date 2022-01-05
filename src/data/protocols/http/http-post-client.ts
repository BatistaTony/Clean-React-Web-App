import { HttpResponseType } from './http-response'

export type ParamsPosttType = {
  url: string
  body?: Object
}

export interface HttpPostClient {
  post: (params: ParamsPosttType) => Promise<HttpResponseType>
}
