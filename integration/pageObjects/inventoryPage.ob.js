// playwright-dev-page.js
const { expect } = require('@playwright/test');
const assert = require('assert');

exports.InventoryPage = class InventoryPage {

  /**
  * @param {import('@playwright/test').Page} page
  */

  constructor(page) {
    this.page = page;
    this.getPageTitle = page.locator('.title');
    this.getShoppingCartLink = page.locator('.shopping_cart_link');
  }

  async verifyPageTitle() { 
    const pageTitleText = await this.getPageTitle.innerText();
    assert(pageTitleText.includes("Products"));
  }

  async sortProducts(sortValue) { 
    await this.page.selectOption('select.product_sort_container', sortValue);
  }

  async gotoShoppingCart() { 
    await this.getShoppingCartLink.click();
  }

}