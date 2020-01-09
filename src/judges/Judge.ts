import { Browser } from "puppeteer";
import { IJudgeCredentials } from "./interfaces";

abstract class Judge {
  constructor(
    protected browser: Browser,
    protected credentials: IJudgeCredentials
  ) {}

  abstract async login(): Promise<void>;
}

export default Judge;
