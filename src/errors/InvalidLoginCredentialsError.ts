export class InvalidLoginCredentialsError extends Error {
  constructor(judge?: string) {
    super(`${judge ? `${judge}: ` : ""}Invalid login credentials`);
  }
}
