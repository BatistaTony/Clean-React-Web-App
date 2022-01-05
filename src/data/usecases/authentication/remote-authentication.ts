import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { HttpResponseStatusCode } from '@/data/protocols/http/http-response'
import { InvalidCredentialError } from '@/domain/erros/invalid-credential-error'
import { AuthParams } from '@/domain/usecases/authentication'

export class RemoteAuthentication {
  constructor (
    private readonly httpPostClient: HttpPostClient,
    private readonly url: string
  ) {}

  async auth (params: AuthParams): Promise<void> {
    const res = await this.httpPostClient.post({ url: this.url, body: params })
    switch (res.statusCode) {
      case HttpResponseStatusCode.unauthorized: throw new InvalidCredentialError()
      default: return await Promise.resolve()
    }
  }
}
