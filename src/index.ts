import Scraper from "./Scraper";

(async (): Promise<void> => {
  const scraper = new Scraper({
    codeforces: {
      credentials: { handle: "fake", password: "fake" }
    },
    uva: {
      credentials: { username: "fake", password: "fake" }
    }
  });
  await scraper.start({ headless: false });
})();
