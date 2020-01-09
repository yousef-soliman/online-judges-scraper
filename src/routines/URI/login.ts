import { Browser } from "puppeteer";
import { IURICredentials } from "./interfaces";

const login = async (
  browser: Browser,
  { email, password }: IURICredentials
): Promise<void> => {
  const loginPage = await browser.newPage();

  await loginPage.goto("https://www.urionlinejudge.com.br/judge/en/login", {
    waitUntil: "domcontentloaded"
  });

  await loginPage.evaluate(
    ({ email, password }) => {
      const qs = document.querySelector.bind(document);
      const emailInput = qs("input[name='email");
      const passwordInput = qs("input[name='password");
      const rememberCheckbox = qs("input[name='remember_me");
      const submitButton = qs("input[type='submit']");

      if (emailInput && passwordInput && rememberCheckbox && submitButton) {
        (emailInput as HTMLInputElement).value = email;
        (passwordInput as HTMLInputElement).value = password;
        (rememberCheckbox as HTMLInputElement).click();
        (submitButton as HTMLInputElement).click();
      } else {
        // TODO: handle possibly null elements due to uri changes
      }
    },
    { email, password }
  );

  await new Promise(resolve => loginPage.once("domcontentloaded", resolve));

  // TODO: handle failed login "alert"

  await loginPage.close();
};

export default login;
