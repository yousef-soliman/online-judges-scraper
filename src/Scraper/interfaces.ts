import { IJudgeCredentials } from "../judges";

export interface IScraperOptions {
  headless?: boolean;
  judges?: {
    Codeforces?: IJudgeCredentials;
    UVa?: IJudgeCredentials;
    URI?: IJudgeCredentials;
  };
}
