import { test } from '@playwright/test';

test('test2', async ({ page }) => {
    await test.step("Step 1", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Step 2", async () => {
        await page.locator("//a[text() = 'Bài học 2: Product page']").click();
    });

    await test.step("Step 3: Add san pham 1", async () => {
        await page.locator("//button[@data-product-id = '1']").click();
        await page.locator("//button[@data-product-id = '1']").click();
    });

    await test.step("Step 4: Add san pham 2", async () => {
        await page.locator("//button[@data-product-id = '2']").click();
        await page.locator("//button[@data-product-id = '2']").click();
        await page.locator("//button[@data-product-id = '2']").click();
    });

    await test.step("Step 4: Add san pham 3", async () => {
        await page.locator("//button[@data-product-id = '3']").click();
    });
});