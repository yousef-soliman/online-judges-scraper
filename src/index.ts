import Scraper from "./Scraper";

(async (): Promise<void> => {
  await Scraper.run({
    headless: false,
    judges: {
      codeforces: { handle: "fake", password: "fake" },
      uva: { username: "fake", password: "fake" },
      uri: { email: "fake@gmail.com", password: "fake" }
    }
  });
})();
