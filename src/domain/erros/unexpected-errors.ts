export class UnExpectedError extends Error {
  constructor () {
    super('Something went wrong')
    this.name = 'UnExpectedError'
  }
}
