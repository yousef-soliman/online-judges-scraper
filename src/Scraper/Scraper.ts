import puppeteer, { Browser } from "puppeteer";
import { IScraperOptions } from "./interfaces";
import { Codeforces, UVa, URI } from "../routines";

export default class Scraper {
  private constructor(private browser: Browser) {}

  public static async run(options: IScraperOptions): Promise<Scraper> {
    const { headless = true, judges } = options;
    try {
      const browser = await puppeteer.launch({ headless });

      const scraper = new Scraper(browser);
      const logins: Promise<void>[] = [];

      if (judges?.codeforces) {
        logins.push(Codeforces.login(browser, judges?.codeforces));
      }

      if (judges?.uva) {
        logins.push(UVa.login(browser, judges?.uva));
      }

      if (judges?.uri) {
        logins.push(URI.login(browser, judges?.uri));
      }

      await Promise.all(logins);

      return scraper;
    } catch (error) {
      // TODO: handle puppeteer launch error
      throw new Error();
    }
  }
}
