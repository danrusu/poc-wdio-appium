export async function waitForWebView(timeout = 10_000): Promise<string> {
  let webViewContext;

  await browser.waitUntil(
    async () => {
      const contexts = await browser.getContexts();
      console.log('@@@ Available contexts:', contexts);

      webViewContext = contexts.find(ctx =>
        ctx.toString().toLowerCase().includes('webview'),
      );

      return !!webViewContext;
    },
    {
      timeout,
      interval: 500,
      timeoutMsg: `webView context not found in ${timeout} ms`,
    },
  );

  if (!webViewContext) {
    throw new Error('WebView context not found');
  }

  return webViewContext;
}

export async function switchContextToNativeApp() {
  return await browser.switchContext('NATIVE_APP');
}

export async function scrollUntilVisible(selector: string, maxSwipes = 10) {
  for (let i = 0; i < maxSwipes; i++) {
    const element = await $(selector);

    if (await element.isDisplayed()) {
      return element;
    }

    await driver.performActions([
      {
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
          { type: 'pointerMove', duration: 0, x: 500, y: 1600 },
          { type: 'pointerDown', button: 0 },
          { type: 'pause', duration: 100 },
          { type: 'pointerMove', duration: 600, x: 500, y: 400 },
          { type: 'pointerUp', button: 0 },
        ],
      },
    ]);

    await driver.releaseActions();

    await driver.pause(1000);
  }

  throw new Error('Element not found after maximum swipes');
}
