import { test, expect } from "@playwright/test";

test("user can create a task", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await page.getByPlaceholder("Task name").fill("Learn AI harnesses");

  await page.getByRole("button", {
    name: "Add task",
  }).click();

  await expect(
    page.getByText("Learn AI harnesses")
  ).toBeVisible();
});