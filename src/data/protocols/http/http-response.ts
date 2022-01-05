export enum HttpResponseStatusCode {
  ok = 200,
  unauthorized = 401,
  noContent = 204,
  badRequest = 400,
  notFound = 404,
  serverError = 500
}

export type HttpResponseType = {
  statusCode: HttpResponseStatusCode
  body?: any
}
