// @ts-check
const assert = require('assert');
const { test, expect } = require('@playwright/test');
import dataFile from '../data/dataFile.json';

const { SignInPage } = require('../integration/pageObjects/signInPage.ob.js');
const { InventoryPage } = require('../integration/pageObjects/inventoryPage.ob.js');
const { CartPage } = require('../integration/pageObjects/cartPage.ob.js');
const { CheckoutPageOne } = require('../integration/pageObjects/checkoutPageOne.ob.js');
const { CheckoutPageTwo } = require('../integration/pageObjects/checkoutPageTwo.ob.js');


test.describe('Swag Labs -- Playwright', () => {
  
  test("Swag Labs -- Playwright", async ({ page, }) => {

    const signInPage = new SignInPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPageOne = new CheckoutPageOne(page);
    const checkoutPageTwo = new CheckoutPageTwo(page);

    // await page.pause();
    
    console.log('Go to Log in');
    await page.goto(dataFile.url.login);
    await signInPage.verifyPageTitle();
    console.log('Log in as Standard User');
    await signInPage.userLogin(dataFile.username[0], dataFile.password);    
    page.url().includes(dataFile.url.inventory);
    console.log('Logged in Successfully');
  
    await page.waitForTimeout(1000);
    await inventoryPage.verifyPageTitle(); 
    console.log('Sort : Price (High to Low)');
    await inventoryPage.sortProducts('hilo');
    await page.waitForTimeout(1500);

    console.log('Add to Cart : Sauce Labs Fleece Jacket');
    await page.locator('#add-to-cart-sauce-labs-fleece-jacket').click();
    await page.waitForTimeout(500);

    console.log('Add to Cart : Sauce Labs Backpack');
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.waitForTimeout(500);

    console.log('Add to Cart : Sauce Labs Bolt T-Shirt');
    await page.locator('#add-to-cart-sauce-labs-bolt-t-shirt').click();
    await page.waitForTimeout(500);

    console.log('Add to Cart : Sauce Labs Bike Light');
    await page.locator('#add-to-cart-sauce-labs-bike-light').click();
    await page.waitForTimeout(500);

    console.log('Remove from Cart : Sauce Labs Bolt T-Shirt');
    await page.locator('#remove-sauce-labs-bolt-t-shirt').click();
    await page.waitForTimeout(500);

    console.log('Go to Cart');
    await inventoryPage.gotoShoppingCart();
    page.url().includes(dataFile.url.cart);    
    await cartPage.verifyPageTitle();

    console.log('Verify Items in Cart');
    await cartPage.verifyItemInCart("Sauce Labs Fleece Jacket");
    await cartPage.verifyItemInCart("Sauce Labs Backpack");
    await cartPage.verifyItemInCart("Sauce Labs Bike Light");
    console.log('Items Verified');

    console.log('Go to Continue Shopping');
    await cartPage.gotoContinueShopping();
    page.url().includes(dataFile.url.inventory);
    await inventoryPage.verifyPageTitle();

    console.log('Add to Cart : Sauce Labs Bolt T-Shirt');
    await page.locator('#add-to-cart-sauce-labs-bolt-t-shirt').click();
    await page.waitForTimeout(500);

    console.log('Go to Cart');
    await inventoryPage.gotoShoppingCart();
    page.url().includes(dataFile.url.cart);    
    await cartPage.verifyPageTitle();

    console.log('Verify Items in Cart');
    await cartPage.verifyItemInCart("Sauce Labs Fleece Jacket");
    await cartPage.verifyItemInCart("Sauce Labs Backpack");
    await cartPage.verifyItemInCart("Sauce Labs Bike Light");
    await cartPage.verifyItemInCart("Sauce Labs Bolt T-Shirt");
    console.log('Items Verified');

    console.log('Go to Checkout');
    await cartPage.gotoCheckout();
    await page.waitForTimeout(1000);
    page.url().includes(dataFile.url.checkoutOne);    
    await checkoutPageOne.verifyPageTitle();

    var userInfo = dataFile.checkoutInfo;
    await checkoutPageOne.checkoutInfoFillup(userInfo.firstname, userInfo.lastname, userInfo.postalCode);
    page.url().includes(dataFile.url.checkoutTwo);
    await page.waitForTimeout(1000);
    await checkoutPageTwo.verifyPageTitle();
    await checkoutPageTwo.verifyItemInCart("Sauce Labs Fleece Jacket");
    await checkoutPageTwo.verifyItemInCart("Sauce Labs Backpack");
    await checkoutPageTwo.verifyItemInCart("Sauce Labs Bike Light");
    await checkoutPageTwo.verifyItemInCart("Sauce Labs Bolt T-Shirt");
    await checkoutPageTwo.clickFinish();

    await page.waitForTimeout(1000);

  });

});

