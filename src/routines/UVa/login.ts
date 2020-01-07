import { Browser } from "puppeteer";
import { UVaCredentials } from "./interfaces";

const login = async (
  browser: Browser,
  { username, password }: UVaCredentials
): Promise<void> => {
  const loginPage = await browser.newPage();

  await loginPage.goto(
    "https://onlinejudge.org/index.php?option=com_comprofiler&task=login",
    { waitUntil: "domcontentloaded" }
  );

  await loginPage.evaluate(
    ({ username, password }) => {
      const qs = document.querySelector.bind(document);
      const usernameInput = qs("#mod_login_username");
      const passwordInput = qs("#mod_login_password");
      const rememberCheckbox = qs("#mod_login_remember");
      const submitButton = qs("input[type='submit']");

      if (usernameInput && passwordInput && rememberCheckbox && submitButton) {
        (usernameInput as HTMLInputElement).value = username;
        (passwordInput as HTMLInputElement).value = password;
        (rememberCheckbox as HTMLInputElement).click();
        (submitButton as HTMLInputElement).click();
      } else {
        // TODO: handle possibly null elements due to uva changes
      }
    },
    { username, password }
  );

  await new Promise(resolve => loginPage.once("domcontentloaded", resolve));

  // TODO: handle failed login "alert"

  await loginPage.close();
};

export default login;
