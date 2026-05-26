import { signIn } from '../mobileViewMapper/signIn';

describe('AllinOne App suite', () => {
  it('should login with valid credentials', async () => {
    await signIn('fire@hihi.lol', '12345Test54321?');
  });
});
