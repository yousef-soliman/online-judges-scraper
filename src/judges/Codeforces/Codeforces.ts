import Judge from "../Judge";
import { IJudgeCredentials } from "../interfaces";

class Codeforces extends Judge {
  async login(credentials: IJudgeCredentials): Promise<void> {
    const loginPage = await this.browser.newPage();

    await loginPage.goto("https://codeforces.com/enter", {
      waitUntil: "domcontentloaded"
    });

    await loginPage.evaluate(
      ({ username, password }) => {
        const qs = document.querySelector.bind(document);
        const usernameInput = qs("#handleOrEmail");
        const passwordInput = qs("#password");
        const rememberCheckbox = qs("#remember");
        const submitBtn = qs("input[type='submit']");

        if (usernameInput && passwordInput && rememberCheckbox && submitBtn) {
          (usernameInput as HTMLInputElement).value = username;
          (passwordInput as HTMLInputElement).value = password;
          (rememberCheckbox as HTMLInputElement).click();
          (submitBtn as HTMLInputElement).click();
        } else {
          // TODO: handle possibly null elements due to codeforces changes
        }
      },
      { ...credentials }
    );

    await new Promise(resolve => loginPage.once("domcontentloaded", resolve));
    // TODO: handle failed login "error for__password"

    await loginPage.close();
  }
}

export default Codeforces;
