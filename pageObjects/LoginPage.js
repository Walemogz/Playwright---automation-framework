const { expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;
        this.userNameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.signInButton = page.locator('.btn_action');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
        await expect(this.page).toHaveTitle('Swag Labs');
    }

    async login(username, password) {
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
    }

    async assertErrorMessage(expectedText) {
        await expect(this.errorMessage).toHaveText(expectedText);
    }
}

module.exports = { LoginPage };
