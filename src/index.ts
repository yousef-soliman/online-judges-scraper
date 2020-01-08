import Scraper from "./Scraper";

(async (): Promise<void> => {
  const scraper = new Scraper({
    codeforces: {
      credentials: { handle: "fake", password: "fake" }
    },
    uva: {
      credentials: { username: "fake", password: "fake" }
    },
    uri: {
      credentials: { email: "fake@gmail.com", password: "fake" }
    }
  });
  await scraper.start({ headless: false });
})();
