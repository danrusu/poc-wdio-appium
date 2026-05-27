import HomePage from '../pom/HomePage';
import { signIn } from '../pom/signIn';
import { scrollUntilVisible } from '../utils/utils';

describe('AllinOne App suite', () => {
  it('should login with valid credentials', async () => {
    await signIn('fire@hihi.lol', '12345Test54321?');
    // await signIn('andro@hihi.lol', '1234567890Abc?');

    const homePage = new HomePage();

    await homePage.tapGroheShop();
    await driver.pause(5_000);

    //await homePage.enterShop('Germany');
    await (await scrollUntilVisible(`//*[@text="Add to Cart"]`)).click();

    await $(`//*[@text="View Cart"]`).click();
    await $(`//*[@text="Checkout]`).click();

    await driver.pause(10_000);
  });
});
