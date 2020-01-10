import { Browser } from "puppeteer";
import { IJudgeCredentials } from "./interfaces";

abstract class Judge {
  constructor(protected browser: Browser) {}
  abstract async login(credentials: IJudgeCredentials): Promise<void>;
}

export default Judge;
