import puppeteer, { Browser } from "puppeteer";
import { IScraperStartOptions, IScraperOptions } from "./interfaces";
import { Codeforces, UVa, URI } from "../routines";

export default class Scraper {
  private browser!: Browser;
  private options: IScraperOptions;

  constructor(options: IScraperOptions = {}) {
    this.options = options;
  }

  async start({ headless = true }: IScraperStartOptions = {}): Promise<void> {
    try {
      this.browser = await puppeteer.launch({ headless });

      const { codeforces, uva, uri } = this.options;
      const logins: Promise<void>[] = [];

      if (codeforces) {
        logins.push(Codeforces.login(this.browser, codeforces.credentials));
      }

      if (uva) {
        logins.push(UVa.login(this.browser, uva.credentials));
      }

      if (uri) {
        logins.push(URI.login(this.browser, uri.credentials));
      }

      await Promise.all(logins);
    } catch (error) {
      // TODO: handle puppeteer launch error
    }
  }
}
