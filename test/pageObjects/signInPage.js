import { $, driver } from '@wdio/globals';

async function signIn(username, password) {
  await driver.pause(10000);

  const signInButton = await $('//*[@text="Sign In"]');
  await signInButton.click();

  let webview;
  await driver.waitUntil(
    () => {
      const contexts = await driver.getContexts();
      console.log(`@@@ contexts: ${contexts}`);
      webview = contexts.find(context => context.includes('WEBVIEW'));
      return !!webview;
    },
    {
      timeout: 20_000,
      interval: 500,
      timeoutMsg: 'Expected to find a WEBVIEW context after 20s',
    },
  );

  await driver.switchContext(webview);

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

export { signIn };
