import puppeteer, { Browser } from "puppeteer";
import { StartOptions } from "./interfaces";

export default class Scraper {
  private _browser!: Browser;

  async start({ headless = true }: StartOptions = {}): Promise<void> {
    try {
      this._browser = await puppeteer.launch({ headless });
    } catch (error) {
      // TODO: handle puppeteer launch error
    }
  }
}
