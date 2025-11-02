
import { test, expect } from '@playwright/test';

test('Client App login', async ({ page }) => {
    const productName = 'ZARA COAT 3';   // the product you want

    // Login
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("walemogaji01@outlook.com");
    await page.locator("#userPassword").fill("Oluwasegun12.");
    await page.locator("[value='Login']").click();

    // Wait for products to load
    await page.waitForSelector(".card-body");

    // Find all product cards
    const products = page.locator(".card-body");

    const count = await products.count();
    for (let i = 0; i < count; i++) {
        const productTitle = await products.nth(i).locator("b").textContent();

        if (productTitle.trim() === productName) {
            // Click "Add to Cart" inside the matched product
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }

    // Assert cart contains the product
    await page.locator("[routerlink*='cart']").click();
    await page.waitForSelector("h3:has-text('ZARA COAT 3')");
    const cartVisible = await page.locator(`h3:has-text("${productName}")`).isVisible();
    await page.locator("div li").first().waitFor();
    expect(cartVisible).toBeTruthy();
    await page.locator('button.btn.btn-primary:has-text("Checkout")');
    await page.locator('button.btn.btn-primary:has-text("Checkout")').click();
    //await page.waitForSelector('input[type="text"]').nth(2
    await page.locator("input.input.txt.text-validated").first().waitFor();
    await page.locator('input.input.txt.text-validated').first().fill('5356667461784642');
    const countryInput = page.getByRole('textbox', { name: 'Select Country' });
    await countryInput.click();
    await countryInput.type('ind', { delay: 100 });
    const dropdown = page.locator('.ta-results');
    await expect(dropdown).toBeVisible();
    //await dropdown.locator('button:has-text("India")').click();
    const optionsCount = await dropdown.locator('button').count();

    for (let i = 0; i < optionsCount; i++) {
        const text = await dropdown.locator('button').nth(i).textContent();
        if (text.trim() === 'India') {
            await dropdown.locator('button').nth(i).click();
            break;
        }
    }

    await page.locator('text=CVV Code').locator('..').locator('input').fill('123');
    await page.locator('.input.txt').nth(2).fill('Mariama Morayo');
    //await page.getByRole('textbox', { name: 'Name on Card' }).fill('Mariama Morayo');
    await page.locator(".action__submit ").click();


    //await page.locator("[placeholder*=\'country\']").fill("ind", { delay: 100 });
    //await page.getByRole('textbox', { name: 'Select Country' }).fill("ind", { delay: 150 });
    //await page.waitForSelector(".ta-results");
    // const dropdown = page.locator('.ta-results');
    //await dropdown.waitFor();
    //optionsCounts = await dropdown.locator("button").count();
    //for (let i = 0; i < optionsCounts; ++i) {
    //  text = await dropdown.locator("button").nth(i).textContent();
    //   if (text === "India") {
    //    await dropdown.locator("button").nth(i).click();
    //  }
    // }









});

