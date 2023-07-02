// playwright-dev-page.js
const { expect } = require('@playwright/test');
const assert = require('assert');

exports.SignInPage = class SignInPage {

  /**
  * @param {import('@playwright/test').Page} page
  */

  constructor(page) {
    this.page = page;
    this.getPageTitle = page.locator(".login_logo");
    this.getUsernameField = page.locator("#user-name");
    this.getPasswordField = page.locator("#password");
    this.getLoginButton = page.locator('#login-button'); 
  }

  async verifyPageTitle() { 
    const pageTitleText = await this.getPageTitle.innerText();
    assert(pageTitleText.includes("Swag Labs"));
  }

  async setUsername(username) { 
    await this.getUsernameField.clear();
    await this.getUsernameField.fill(username);
  }

  async setPassword(password) { 
    await this.getPasswordField.clear();
    await this.getPasswordField.fill(password);
  }

  async clickLoginButton() { 
    await this.getLoginButton.click();
  }

  async userLogin(username, password) { 
    await this.setUsername(username);
    await this.setPassword(password);
    await this.clickLoginButton();
  }

}