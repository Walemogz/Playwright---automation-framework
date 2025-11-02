const { expect, test } = require('@playwright/test');

test('Browser context playwright automation', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");


});

test('My first playwright automation', async ({ page }) => {
    const userName = page.locator('#username');
    const password = page.locator('#password');
    const signIn = page.locator('#signInBtn');
    const cardTitles = page.locator(".card-body a");


    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
    await page.pause();
    await page.locator('#username').fill("rahulshetty");
    await page.locator('#password').fill("learning");
    await page.locator('#signInBtn').click();
    console.log(await page.locator("[style*='block']").textContent());
    expect(page.locator("[style*='block']")).toContainText('Incorrect username/password');
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await password.fill("");
    await password.fill("learning");
    await signIn.click();
    await page.pause();

    // expect(page.locator("h1[class='my-4']")).toContainText('Shop Name');
    await page.locator('body > app-root > app-shop > nav > div').click();
    //await page.locator('h1[class='my-4']').click();
    console.log(await page.locator(".card-body a").first().textContent());
    console.log(await page.locator(".card-body a").nth(1).textContent());
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);
    await page.pause();



});

test('UI controls', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator('#username').fill("rahulshetty");
    await page.locator('#password').fill("learning");
    const documentlink = page.locator("[href*='documents-request']");
    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption('consult');
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    console.log(await page.locator(".radiotextsty").last().isChecked());
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();
    // await expect(documentlink).toHaveAttribute ("class", "blinkingText,");
    await page.pause();

});

test('child window handling', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentlink = page.locator("[href*='documents-request']");

    const [newPage] = await Promise.all(
        [context.waitForEvent('page'),
        documentlink.click(),
        ])

    const text = await newPage.locator(".red").textContent();
    console.log(text);
    //const arrayTest = test.split ("@")
    //const domain = arrayTest[1].split (" ")[0]

    //console.log(domain);

    // await page.pause();
    //const page2 = context.waitForEvent('page');

});

