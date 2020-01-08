import { Browser } from "puppeteer";
import { CodeforcesCredentials } from "./interfaces";

const login = async (
  browser: Browser,
  { handle, password }: CodeforcesCredentials
): Promise<void> => {
  const loginPage = await browser.newPage();

  await loginPage.goto("https://codeforces.com/enter", {
    waitUntil: "domcontentloaded"
  });

  await loginPage.evaluate(
    ({ handle, password }) => {
      const qs = document.querySelector.bind(document);
      const handleInput = qs("#handleOrEmail");
      const passwordInput = qs("#password");
      const rememberCheckbox = qs("#remember");
      const submitButton = qs("input[type='submit']");

      if (handleInput && passwordInput && rememberCheckbox && submitButton) {
        (handleInput as HTMLInputElement).value = handle;
        (passwordInput as HTMLInputElement).value = password;
        (rememberCheckbox as HTMLInputElement).click();
        (submitButton as HTMLInputElement).click();
      } else {
        // TODO: handle possibly null elements due to codeforces changes
      }
    },
    { handle, password }
  );

  await new Promise(resolve => loginPage.once("domcontentloaded", resolve));

  // TODO: handle failed login "error for__password"

  await loginPage.close();
};

export default login;
