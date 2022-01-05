import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { HttpResponseStatusCode } from '@/data/protocols/http/http-response'
import { InvalidCredentialError } from '@/domain/erros/invalid-credential-error'
import { UnExpectedError } from '@/domain/erros/unexpected-errors'
import { AuthParams } from '@/domain/usecases/authentication'

export class RemoteAuthentication {
  constructor (
    private readonly httpPostClient: HttpPostClient,
    private readonly url: string
  ) {}

  async auth (params: AuthParams): Promise<void> {
    const res = await this.httpPostClient.post({ url: this.url, body: params })
    switch (res.statusCode) {
      case HttpResponseStatusCode.ok: return await Promise.resolve()
      case HttpResponseStatusCode.unauthorized: throw new InvalidCredentialError()
      default: throw new UnExpectedError()
    }
  }
}
