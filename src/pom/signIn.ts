import { $, driver } from '@wdio/globals';

import { waitForWebView, switchContextToNativeApp } from '../utils/utils';

export async function signIn(username: string, password: string) {
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

  const usernameInput = await $('#username');
  await usernameInput.waitForDisplayed({
    timeout: 10_000,
    interval: 1000,
    timeoutMsg: 'Username input not displayed after 10s',
  });
  await usernameInput.setValue(username);

  const passwordInput = await $('#password');
  await passwordInput.setValue(password);

  await driver.hideKeyboard();

  const logInButton = await $('button[type=submit]');
  await logInButton.click();

  await driver.pause(5_000);

  await switchContextToNativeApp();
}
