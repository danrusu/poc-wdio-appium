import {
  signIn,
  homePage,
  shopPage,
  shoppingCartPage,
  addedToBasketPage,
} from '../pom';

describe('AllinOne App Test Suite', () => {
  it('should add product to cart and proceed to checkout', async () => {
    await signIn('TEST_USER_1');

    await homePage.tapGroheShop();

    // add first product to cart
    await shopPage.addToCart();

    await addedToBasketPage.continueShopping();

    // add second product to cart
    await shopPage.addToCart();

    await addedToBasketPage.viewCart();

    await shoppingCartPage.goToCheckout();
  });
});
