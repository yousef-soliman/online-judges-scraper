import { CodeforcesCredentials } from "../routines/Codeforces/interfaces";
import { UVaCredentials } from "../routines/UVa/interfaces";

export interface ScraperOptions {
  codeforces?: {
    credentials: CodeforcesCredentials;
  };
  uva?: {
    credentials: UVaCredentials;
  };
}

export interface ScraperStartOptions {
  headless?: boolean;
}
