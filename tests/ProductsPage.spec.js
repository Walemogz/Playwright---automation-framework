const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/LoginPage');
const { ProductsPage } = require('../pageObjects/ProductsPage');

test('Add product to cart successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await productsPage.verifyProductsPage();

    await productsPage.addProductToCart('Sauce Labs Onesie');
    await productsPage.goToCart();
    await expect(page.locator('.cart_item')).toBeVisible();

    //await page.pause(); 
});
