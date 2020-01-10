import puppeteer, { Browser } from "puppeteer";
import { Codeforces, UVa, URI } from "../judges";
import { IScraperOptions } from "./interfaces";

export default class Scraper {
  private constructor(private browser: Browser) {}

  public static async run(options: IScraperOptions): Promise<Scraper> {
    const { headless = true, judges } = options;
    try {
      // TODO: establish relationship between judges and scraper
      const browser = await puppeteer.launch({ headless });
      const scraper = new Scraper(browser);

      const logins: Promise<void>[] = [];
      if (judges?.Codeforces) {
        logins.push(new Codeforces(browser).login(judges.Codeforces));
      }

      if (judges?.UVa) {
        logins.push(new UVa(browser).login(judges.UVa));
      }

      if (judges?.URI) {
        logins.push(new URI(browser).login(judges.URI));
      }

      await Promise.all(logins);

      return scraper;
    } catch (error) {
      // TODO: handle puppeteer launch error
      throw new Error();
    }
  }
}
