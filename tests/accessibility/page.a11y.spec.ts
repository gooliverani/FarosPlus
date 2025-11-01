import { expect, test, type Page } from '@playwright/test';

const baseUrl = process.env.PLAYWRIGHT_BASE_URL ?? 'http://localhost:3000';

test.describe('Landing page accessibility', () => {
  test('keyboard users can focus the tap-to-call CTA', async ({ page }: { page: Page }) => {
    await page.goto(baseUrl);
    const telLink = page.locator('a[href^="tel:"]').first();
    await expect(telLink).toBeVisible();

    const isFocusable = await telLink.evaluate((element) => {
      const el = element as HTMLElement;
      const style = window.getComputedStyle(el);
      const hidden = style.display === 'none' || style.visibility === 'hidden';
      const ariaHidden = el.getAttribute('aria-hidden') === 'true';
      return !hidden && !ariaHidden && el.tabIndex !== -1;
    });

    expect(isFocusable).toBe(true);

    await telLink.focus();
    await expect(telLink).toBeFocused();
  });

  test('thank-you message is visible when targeted', async ({ page }: { page: Page }) => {
    await page.goto(`${baseUrl}#contact-thank-you`);
    const message = page.locator('#contact-thank-you');
    await expect(message).toBeVisible();
    await expect(message).toHaveText(/Thanks for reaching out/i);
  });
});
