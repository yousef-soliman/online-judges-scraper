import puppeteer, { Browser } from "puppeteer";
import { ScraperStartOptions, ScraperOptions } from "./interfaces";
import { Codeforces, UVa } from "../routines";

export default class Scraper {
  private _browser!: Browser;
  private _options: ScraperOptions;

  constructor(options: ScraperOptions = {}) {
    this._options = options;
  }

  async start({ headless = true }: ScraperStartOptions = {}): Promise<void> {
    try {
      this._browser = await puppeteer.launch({ headless });

      const { codeforces: codeforcesOptions, uva: uvaOptions } = this._options;
      const judgesLoginPromises: Promise<void>[] = [];

      if (codeforcesOptions) {
        judgesLoginPromises.push(
          Codeforces.login(this._browser, codeforcesOptions.credentials)
        );
      }

      if (uvaOptions) {
        judgesLoginPromises.push(
          UVa.login(this._browser, uvaOptions.credentials)
        );
      }

      await Promise.all(judgesLoginPromises);
    } catch (error) {
      // TODO: handle puppeteer launch error
    }
  }
}
