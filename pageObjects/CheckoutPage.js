const { expect } = require('@playwright/test');

class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postalCode = page.locator('#postal-code');
        this.continueButton = page.locator('.btn_primary');
        this.finishButton = page.locator('.cart_button');
        this.completeHeader = page.locator('.complete-header');
    }

    async fillCheckoutInfo(firstName, lastName, postalCode) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);
        await this.continueButton.click();
    }

    async finishOrder() {
        await this.finishButton.click();
        await expect(this.completeHeader).toBeVisible();
        const completeText = await this.completeHeader.textContent();
        console.log('Order completion message:', completeText);


    }

    async verifyOrderComplete() {
        await expect(this.completeHeader).toBeVisible();
    }
}

module.exports = { CheckoutPage };
