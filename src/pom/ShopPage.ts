import { scrollUntilVisible } from '../utils/utils';

class ShopPage {
  async addToCart() {
    await (await scrollUntilVisible('//*[@text="Add to Cart"]')).click();
  }
}

export default new ShopPage();
