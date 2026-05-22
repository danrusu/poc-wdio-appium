import { signIn } from '../pageobjects/signInPage.js';

describe('AllinOne App suite', () => {
  it('should login with valid credentials', async () => {
    signIn('fire@hihi .lol', '12345Test54321?');
  });
});
