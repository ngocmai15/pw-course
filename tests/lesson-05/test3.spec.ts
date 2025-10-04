import { test } from '@playwright/test';

test('test3', async ({ page }) => {
    await test.step("Step 1", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Step 2", async () => {
        await page.locator("//a[text() = 'Bài học 3: Todo page']").click();
    });

    await test.step("Step 3: Them 100 todo", async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator("//input[@id = 'new-task']").fill(`Todo ${i}`);
            await page.click("//button[@id='add-task']");
        }
    });

    await test.step("Step 4: Xoa cac todo co so le", async () => {
        page.on('dialog', async dialog => dialog.accept());

        for (let i = 1; i <= 100; i++) {
            if (i % 2 === 1) {
                await page.locator(`//button[@id="todo-${i}-delete"]`).click();
            }
        }

    })
})



