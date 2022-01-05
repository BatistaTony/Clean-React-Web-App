export enum HttpResponseStatusCode {
  unauthorized = 401,
  noContent = 204
}

export type HttpResponseType = {
  statusCode: HttpResponseStatusCode
  body?: any
}
