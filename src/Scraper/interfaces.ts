import { CodeforcesCredentials } from "../routines/Codeforces/interfaces";

export interface ScraperOptions {
  codeforces?: {
    credentials: CodeforcesCredentials;
  };
}

export interface ScraperStartOptions {
  headless?: boolean;
}
