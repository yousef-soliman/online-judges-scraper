import { CodeforcesCredentials } from "../routines/Codeforces/interfaces";
import { UVaCredentials } from "../routines/UVa/interfaces";
import { URICredentials } from "../routines/URI/interfaces";

export interface ScraperOptions {
  codeforces?: {
    credentials: CodeforcesCredentials;
  };
  uva?: {
    credentials: UVaCredentials;
  };
  uri?: {
    credentials: URICredentials;
  };
}

export interface ScraperStartOptions {
  headless?: boolean;
}
