export default class HomePage {
  private get groheShop() {
    return $('//*[@text="Tap to visit the GROHE shop"]');
  }

  async tapGroheShop() {
    await this.groheShop.waitForDisplayed({
      timeout: 20_000,
      interval: 500,
      timeoutMsg: 'GROHE shop not displayd after 3s',
    });

    await this.groheShop.click();
  }

  async enterShop(location: string) {
    await $(`(//android.widget.TextView[@text="${location}"])[1]`).click();
    await $('//android.widget.TextView[@text="Enter Shop"]').click();
  }
}
