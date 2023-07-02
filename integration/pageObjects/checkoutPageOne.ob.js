// playwright-dev-page.js
const { expect } = require('@playwright/test');
const assert = require('assert');

exports.CheckoutPageOne = class CheckoutPageOne {

  /**
  * @param {import('@playwright/test').Page} page
  */

  constructor(page) {
    this.page = page;
    this.getPageTitle = page.locator('.title');
    this.getFirstnameField = page.locator('#first-name');
    this.getLastnameField = page.locator('#last-name');
    this.getPostalCodeField = page.locator('#postal-code');
    this.getContinueButton = page.locator('#continue');
  }

  async verifyPageTitle() { 
    const pageTitleText = await this.getPageTitle.innerText();
    assert(pageTitleText.includes("Checkout: Your Information"));
  }

  async setFirstname(firstname) { 
    await this.getFirstnameField.clear();
    await this.getFirstnameField.fill(firstname);
  }

  async setLastname(lastname) { 
    await this.getLastnameField.clear();
    await this.getLastnameField.fill(lastname);
  }

  async setPostalCode(postalCode) { 
    await this.getPostalCodeField.clear();
    await this.getPostalCodeField.fill(postalCode); 
  }

  async clickContinue() { 
    await this.getContinueButton.click();
  }

  async checkoutInfoFillup(firstname, lastname, postalCode) { 
    await this.setFirstname(firstname);
    await this.setLastname(lastname);
    await this.setPostalCode(postalCode);
    await this.clickContinue();
  }

}