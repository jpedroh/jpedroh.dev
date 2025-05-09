import { test, expect } from '@playwright/test';

test.describe('Website Functionalities', () => {
  test('Verify the page title', async ({ page }) => {
    await page.goto('http://localhost:4321');
    await expect(page).toHaveTitle('Joao Pedro Duarte');
  });

  test('Check the presence of navigation links', async ({ page }) => {
    await page.goto('http://localhost:4321');
    const navLinks = ['About', 'Education', 'Professional experience'];
    for (const linkText of navLinks) {
      await expect(page.locator(`text=${linkText}`)).toBeVisible();
    }
  });

  test('Verify the social media links', async ({ page }) => {
    await page.goto('http://localhost:4321');
    const socialMediaLinks = [
      { name: 'GitHub', url: 'https://github.com/jpedroh' },
      { name: 'LinkedIn', url: 'https://linkedin.com/in/jpedroh' },
      { name: 'Twitter', url: 'https://twitter.com/eusouojotape' },
    ];
    for (const { name, url } of socialMediaLinks) {
      const link = page.locator(`a:has-text("${name}")`);
      await expect(link).toHaveAttribute('href', url);
      await expect(link).toHaveAttribute('target', '_blank');
    }
  });

  test('Check the main content sections', async ({ page }) => {
    await page.goto('http://localhost:4321');
    const sections = ['About', 'Education', 'Professional Experience'];
    for (const section of sections) {
      await expect(page.locator(`text=${section}`)).toBeVisible();
    }
  });

  test('Ensure external links open in a new tab', async ({ page }) => {
    await page.goto('http://localhost:4321');
    const socialMediaLinks = [
      { name: 'GitHub', url: 'https://github.com/jpedroh' },
      { name: 'LinkedIn', url: 'https://linkedin.com/in/jpedroh' },
      { name: 'Twitter', url: 'https://twitter.com/eusouojotape' },
    ];
    const externalLinks = socialMediaLinks.map(link => link.url);
    for (const url of externalLinks) {
      const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        page.click(`a[href="${url}"]`),
      ]);
      await newPage.close();
    }
  });

  test('Verify the content of the About section', async ({ page }) => {
    await page.goto('http://localhost:4321');
    await expect(page.locator('text=A front-end engineer with a passion for building products')).toBeVisible();
  });

  test('Verify the content of the Education section', async ({ page }) => {
    await page.goto('http://localhost:4321');
    await expect(page.locator('text=MSc in Software Engineering - CIn (UFPE)')).toBeVisible();
    await expect(page.locator('text=B.Sc. in Computer Science - CIn (UFPE)')).toBeVisible();
  });

  test('Verify the content of the Professional Experience section', async ({ page }) => {
    await page.goto('http://localhost:4321');
    await expect(page.locator('text=Sr Software Engineer - iFood')).toBeVisible();
    await expect(page.locator('text=Software Engineer - CESAR')).toBeVisible();
    await expect(page.locator('text=Internship in Software Engineer - Viitra')).toBeVisible();
  });
});
