class AddedToBasketPage {
  async viewCart() {
    await $('//*[@text="View Cart"]').click();
  }
  async continueShopping() {
    await $('//*[@text="Continue shopping"]').click();
  }
}

export default new AddedToBasketPage();
