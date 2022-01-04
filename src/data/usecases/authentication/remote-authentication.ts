import { HttpPostClient } from 'data/protocols/http/http-post-client'
import { AuthParams } from 'domain/usecases/authentication'

export class RemoteAuthentication {
  constructor (
    private readonly httpPostClient: HttpPostClient,
    private readonly url: string
  ) {}

  async auth (params: AuthParams): Promise<void> {
    await this.httpPostClient.post({ url: this.url, body: params })
  }
}
