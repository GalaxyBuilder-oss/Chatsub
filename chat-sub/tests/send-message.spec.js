import { test, expect } from "@playwright/test";

test("pengguna bisa kirim dan terima pesan", async ({ page }) => {
  await page.goto("http://localhost:5173");

  // Klik tombol Login untuk membuka form
  await page.click(".login-button");

  // Isi username
  await page.fill("#email", "salim@gmail.com");
  await page.fill("#password", "123");
  await page.click("#login");

  // Pilih teman dulu, misalnya 'Adit'
  await page.click("text=Asep");

  // Kirim pesan
  await page.fill("#message-input", "Halo dunia!");
  await page.click("#send-button");

  // Verifikasi pesan muncul
  const lastMessage = page.locator("#chat-message").last();
  await expect(lastMessage).toContainText("Halo dunia!");
});
