import puppeteer, { Browser } from "puppeteer";
import { ScraperStartOptions, ScraperOptions } from "./interfaces";
import { Codeforces } from "../routines";

export default class Scraper {
  private _browser!: Browser;
  private _options: ScraperOptions;

  constructor(options: ScraperOptions = {}) {
    this._options = options;
  }

  async start({ headless = true }: ScraperStartOptions = {}): Promise<void> {
    try {
      this._browser = await puppeteer.launch({ headless });

      const codeforcesOptions = this._options.codeforces;
      if (codeforcesOptions) {
        await Codeforces.login(this._browser, codeforcesOptions.credentials);
      }
    } catch (error) {
      // TODO: handle puppeteer launch error
    }
  }
}
