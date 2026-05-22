import { $, driver } from '@wdio/globals';

async function signIn(username, password) {
  const signInButton = await $('//*[@text="Sign In"]');
  await signInButton.waitForDisplayed({
    timeout: 20_000,
  });
  await signInButton.click();

  const webViewContext = await waitForWebView(20_000);
  console.log('@@@ Found Webview context:', webViewContext);
  await driver.switchContext(webViewContext);

  const handles = await driver.getWindowHandles();
  console.log(`@@@ Window handles: ${handles}`);
  await driver.switchToWindow(handles[0]);
  const url = await driver.getUrl();
  console.log(`@@@ Webview current URL: ${url}`);

  const usernameInput = await $('#username');
  await usernameInput.waitForDisplayed({
    timeout: 10_000,
    interval: 1000,
    timeoutMsg: 'Username input not displayed after 10s',
  });
  await usernameInput.setValue(username);

  const passwordInput = await $('#password');
  await passwordInput.setValue(password);

  const logInButton = await $('//*[contains(@text, "LOG IN")]');
  await logInButton.click();
}

async function waitForWebView(timeout = 10_000) {
  let webViewContext;

  await browser.waitUntil(
    async () => {
      const contexts = await browser.getContexts();
      console.log('@@@ Available contexts:', contexts);

      webViewContext = contexts.find(ctx =>
        ctx.toLowerCase().includes('webview'),
      );

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
