import { ICodeforcesCredentials } from "../routines/Codeforces/interfaces";
import { IUVaCredentials } from "../routines/UVa/interfaces";
import { IURICredentials } from "../routines/URI/interfaces";

export interface IScraperOptions {
  headless?: boolean;
  judges?: {
    codeforces?: ICodeforcesCredentials;
    uva?: IUVaCredentials;
    uri?: IURICredentials;
  };
}
