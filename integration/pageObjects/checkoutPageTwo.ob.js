// playwright-dev-page.js
const { expect } = require('@playwright/test');
const assert = require('assert');

exports.CheckoutPageTwo = class CheckoutPageTwo {

  /**
  * @param {import('@playwright/test').Page} page
  */

  constructor(page) {
    this.page = page;
    this.getPageTitle = page.locator('.title');
    this.getCartList = page.locator('.cart_list');
    this.getFinishButton = page.locator('#finish');
  }

  async verifyPageTitle() { 
    const pageTitleText = await this.getPageTitle.innerText();
    assert(pageTitleText.includes("Checkout: Overview"));
  }

  async clickFinish() { 
    await this.getFinishButton.click();
  }

  async verifyItemInCart(item) { 
    const cartListText = await this.getCartList.innerText();
    assert(cartListText.includes(item));
  }

}