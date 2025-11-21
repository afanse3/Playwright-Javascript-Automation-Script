import { test, expect } from "@playwright/test";
import { RegistrationPage } from "../pages/registrationPage";

test("Verify user success register account in Cermati", async ({ page }) => {
  const registrationPage = new RegistrationPage(page);

  await test.step("User open Cermati Registration Page", async() => {
    await registrationPage.open();
    await page.screenshot({ path: "screenshots/01. Open Cermati Registration Page.png", fullPage: true })
  })

  await test.step("User fill form", async() => {
    await registrationPage.fillForm();
    await page.screenshot({ path: "screenshots/02. All required fields is filled.png", fullPage: true })
  })

  await test.step("User click daftar button", async() => {
    await registrationPage.clickDaftar();
  })

  await page.waitForTimeout(2000);
  
  await test.step("User see OTP page", async() => {
    await registrationPage.verifyOtpHeader();
    await expect(
    page.getByText("Verifikasi No. Handphone", { exact: true })
  ).toBeVisible();
    await page.screenshot({ path: "screenshots/03. User is on OTP Page.png", fullPage: true })
  })
});