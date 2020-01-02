import puppeteer from "puppeteer";

export default class Scraper {
  private browser!: puppeteer.Browser;

  async run(): Promise<void> {
    const { HEADLESS_MODE } = process.env;
    const headless = HEADLESS_MODE === "true";

    try {
      this.browser = await puppeteer.launch({ headless });
      await this.browser.newPage();
    } catch ({ message }) {
      // eslint-disable-next-line no-console
      console.error(message);
      process.exit(1);
    }
  }
}
