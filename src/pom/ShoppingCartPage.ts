class ShoppingCartPage {
  async goToCheckout() {
    await $('//*[@text="Checkout"]').click();
  }
}

export default new ShoppingCartPage();
