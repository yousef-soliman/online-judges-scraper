export class NullDOMElementError extends Error {
  constructor(judge?: string) {
    super(`${judge ? `${judge}: ` : ""}Null DOM element`);
  }
}
