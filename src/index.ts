import Scraper from "./Scraper";

(async (): Promise<void> => {
  await Scraper.run({
    headless: false,
    judges: {
      Codeforces: { username: "fake", password: "fake" },
      UVa: { username: "fake", password: "fake" },
      URI: { username: "fake@gmail.com", password: "fake" }
    }
  });
})();
