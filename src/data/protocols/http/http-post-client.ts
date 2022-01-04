export type ParamsPosttType = {
  url: string
}

export interface HttpPostClient {
  post: (params: ParamsPosttType) => Promise<void>
}
