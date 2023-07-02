// playwright-dev-page.js
const { expect } = require('@playwright/test');
const assert = require('assert');

exports.CartPage = class CartPage {

  /**
  * @param {import('@playwright/test').Page} page
  */

  constructor(page) {
    this.page = page;
    this.getPageTitle = page.locator('.title');
    this.getCartList = page.locator('.cart_list');
    this.getContinueShoppingButton = page.locator('#continue-shopping');
    this.getCheckoutButton = page.locator('#checkout');
  }

  async verifyPageTitle() { 
    const pageTitleText = await this.getPageTitle.innerText();
    assert(pageTitleText.includes("Your Cart"));
  }

  async verifyItemInCart(itemName) { 
    const cartListText = await this.getCartList.innerText();
    assert(cartListText.includes(itemName));
  }

  async gotoContinueShopping() { 
    await this.getContinueShoppingButton.click();
  }

  async gotoCheckout() { 
    await this.getCheckoutButton.click();
  }

}