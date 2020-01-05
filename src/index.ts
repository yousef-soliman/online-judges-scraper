import Scraper from "./Scraper";

(async (): Promise<void> => {
  const scraper = new Scraper();
  await scraper.start({ headless: false });
})();
