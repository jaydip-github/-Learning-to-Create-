// enable module from package.json before run this test case
import puppeteer from "puppeteer";
import { TESTING_EMAIL, TESTING_PASSWORD } from "../config/index.js";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--window-size=1920,1080"],
  });
  const page = await browser.newPage();

  await page.goto("https://example.com");
  await page.setViewport({ width: 1080, height: 1024 });

  const email = await page
    .locator('input[name="email"]')
    .fill(TESTING_EMAIL || "");
  const password = await page
    .locator('input[name="password"]')
    .fill(TESTING_PASSWORD || "");

  const login = await page.locator(".button_SD").click();
  const profile = await page.locator(".profile").click();

  const logout = await page.locator("#logout_btn").click();
  browser.close();
})();
