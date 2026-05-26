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
