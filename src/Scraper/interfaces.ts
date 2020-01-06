import { CodeforcesCredentials } from "../routines/codeforces/interfaces";

export interface ScraperOptions {
  codeforces?: {
    credentials: CodeforcesCredentials;
  };
}

export interface ScraperStartOptions {
  headless?: boolean;
}
