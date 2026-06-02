describe('AllinOne App suite', () => {
  it('should login with valid credentials', async () => {
    const username = await $(
      '//*[@resource-id="com.example.poctest:id/usernameInput"]',
    );
    const password = await $(
      '//*[@resource-id="com.example.poctest:id/passwordInput"]',
    );
    const loginnButton = await $(
      '//*[@resource-id="com.example.poctest:id/loginButton"]',
    );

    await username.waitForDisplayed({
      timeout: 5000,
    });

    await username.setValue('tester');
    await password.setValue('passw0rd');
    await loginnButton.click();

    const welcomeText = await $(
      '//*[@resource-id="com.example.poctest:id/welcomeText"]',
    );
    await welcomeText.waitForDisplayed({
      timeout: 5000,
    });

    const text = await welcomeText.getText();
    expect(text).toBe('Welcome, tester!');
  });
});
