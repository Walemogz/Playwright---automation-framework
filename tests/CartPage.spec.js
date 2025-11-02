const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/LoginPage');
const { ProductsPage } = require('../pageObjects/ProductsPage');
const { CartPage } = require('../pageObjects/CartPage'); // 👈 add this line

test('Add product to cart and proceed to checkout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await productsPage.addProductToCart('Sauce Labs Backpack');
    await productsPage.goToCart();
    await cartPage.checkout();

    // Step 4: Verify that checkout page is open
    //await expect(page.locator('#first-name')).toBeVisible();

    //await page.pause();
});
