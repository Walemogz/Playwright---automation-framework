const { expect } = require('@playwright/test');

class ProductsPage {
    constructor(page) {
        this.page = page;
        this.header = page.locator('.app_logo');
        this.products = page.locator('.inventory_item_name');
        this.cartIcon = page.locator('.shopping_cart_badge');
    }

    async verifyProductsPage() {
        await expect(this.header).toBeVisible();
    }

    async addProductToCart(productName) {
        const count = await this.products.count();
        for (let i = 0; i < count; i++) {
            const title = (await this.products.nth(i).textContent()).trim();
            if (title === productName) {
                const addButton = this.products
                    .nth(i)
                    .locator('xpath=ancestor::div[@class="inventory_item"]//button[contains(text(),"Add to cart")]');
                await addButton.click();
                break;
            }
        }
    }

    async goToCart() {
        await this.cartIcon.click();
    }
}

module.exports = { ProductsPage };
