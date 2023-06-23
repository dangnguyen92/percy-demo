const { expect } = require('@playwright/test');
const { BasePage } = require('./basePage');

exports.HomePage = class HomePage extends BasePage{
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    this.logoApp = page.locator('header h1');
    this.cartBtn = page.locator('[data-cy="cartBtn"]');
    this.cartBtn_numberItem = page.locator('[data-cy="cartBtn_numberItem"]');
  }

  /**
   * Verify HomePage is visible.
   * 
   * @returns this
   */
  async verifyHomePageVisible() {
    await expect(this.logoApp).toBeVisible();
    await expect(this.cartBtn).toBeVisible();
  }
}