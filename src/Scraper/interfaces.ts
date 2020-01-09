import { ICodeforcesCredentials } from "../routines/Codeforces/interfaces";
import { IUVaCredentials } from "../routines/UVa/interfaces";
import { IURICredentials } from "../routines/URI/interfaces";

export interface IScraperOptions {
  codeforces?: {
    credentials: ICodeforcesCredentials;
  };
  uva?: {
    credentials: IUVaCredentials;
  };
  uri?: {
    credentials: IURICredentials;
  };
}

export interface IScraperStartOptions {
  headless?: boolean;
}
