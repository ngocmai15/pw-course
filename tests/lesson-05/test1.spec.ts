import { test } from '@playwright/test';

test('test1', async ({ page }) => {
    await test.step("Step 1", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Step 2", async () => {
        await page.locator("//a[text() = 'Bài học 1: Register Page (có đủ các element)']").click();
    });

    await test.step("Step 3: Nhap thong tin", async () => {
        await page.locator("//input[@id = 'username']").pressSequentially("ngocmai", { delay: 100 });
        await page.locator("//input[@id = 'email']").fill("ngocmaik105cva@gmail.com");
        await page.locator("//input[@id = 'female']").check();
        await page.locator("//input[@id = 'reading']").check();
        await page.locator("//input[@id = 'traveling']").check();
        await page.locator("//input[@id = 'cooking']").setChecked(false);
        await page.locator("//select[@id = 'interests']").selectOption("music");
        await page.locator("//select[@id = 'country']").selectOption("uk");
        await page.locator("//input[@id = 'dob']").fill("1997-10-15");
        await page.locator("//input[@id = 'profile']").setInputFiles("tests/data-test/data-test.txt");
        await page.locator("//textarea[@id = 'bio']").fill("I'm from Hanoi");
        await page.locator("//input[@id = 'rating']").fill("10");
        await page.locator("//input[@id = 'favcolor']").fill("#151097");
        await page.locator("//input[@id = 'newsletter']").check();
        await page.locator("//span[@class = 'slider round']").check();
    });
    await test.step("Step 4", async () => {
        await page.locator("//button[text() = 'Register']").click();
    });
});
