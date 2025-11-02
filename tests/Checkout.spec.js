const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/LoginPage');
const { ProductsPage } = require('../pageObjects/ProductsPage');
const { CartPage } = require('../pageObjects/CartPage');
const { CheckoutPage } = require('../pageObjects/CheckoutPage');

test('Complete checkout process successfully', async ({ page }) => {
    // Create instances of each Page Object
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await productsPage.addProductToCart('Sauce Labs Backpack');
    await productsPage.goToCart();

    await cartPage.checkout();
    await checkoutPage.fillCheckoutInfo('Olawale', 'AbleGod', 'M5 5BD');
    await checkoutPage.finishOrder();
    //await page.pause();

});
