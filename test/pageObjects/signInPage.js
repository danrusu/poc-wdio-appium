import { $, driver } from '@wdio/globals';

async function signIn(username, password) {
  await driver.pause(10000);

  const signInButton = await $('//*[@text="Sign In"]');
  await signInButton.click();

  const webViewContext = await waitForWebView(20_000);
  await browser.switchContext(webViewContext);

  const usernameInput = await $('//*[@resource-id="username"]');
  await username.waitForDisplayed({
    timeout: 20_000,
  });
  await usernameInput.setValue(username);

  const passwordInput = await $('//*[@resource-id="password"]');
  await passwordInput.setValue(password);

  const logInButton = await $('//*[@text="LOG IN"]');
  await logInButton.click();
}

async function waitForWebView(timeout = 10_000) {
  let webViewContext;

  await browser.waitUntil(
    async () => {
      const contexts = await browser.getContexts();
      console.log('Available contexts:', contexts);

      webViewContext = contexts.find(ctx => ctx.includes('webView'));

      return !!webViewContext;
    },
    {
      timeout,
      interval: 500,
      timeoutMsg: `webView context not found in ${timeout} ms`,
    },
  );

  return webViewContext;
}

export { signIn };
