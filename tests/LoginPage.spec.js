// tests/Login.spec.js
const { test } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/LoginPage');

test('Successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    // Add assertion or next step (e.g., verify redirect)
});

test('Login with invalid credentials shows error', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('wrong_user', 'wrong_password');
    await loginPage.assertErrorMessage('Epic sadface: Username and password do not match any user in this service');
});