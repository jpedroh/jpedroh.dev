import { test, expect } from '@playwright/test';

test.describe('Website Functionalities', () => {
  test('Test the functionalities of the website at http://localhost:4321', async ({ page }) => {
    // Step 1: Navigate to the website
    await page.goto('http://localhost:4321');

    // Step 2: Verify the page title
    await expect(page).toHaveTitle('Joao Pedro Duarte');

    // Step 3: Check the presence of navigation links
    const navLinks = ['About', 'Education', 'Professional experience'];
    for (const linkText of navLinks) {
      await expect(page.locator(`text=${linkText}`)).toBeVisible();
    }

    // Step 4: Verify the social media links
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

    // Step 5: Check the main content sections
    const sections = ['About', 'Education', 'Professional Experience'];
    for (const section of sections) {
      await expect(page.locator(`text=${section}`)).toBeVisible();
    }

    // Step 6: Ensure external links open in a new tab
    const externalLinks = socialMediaLinks.map(link => link.url);
    for (const url of externalLinks) {
      const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        page.click(`a[href="${url}"]`),
      ]);
      await newPage.close();
    }

    // Step 7: Verify the content of the 'About' section
    await expect(page.locator('text=A front-end engineer with a passion for building products')).toBeVisible();

    // Step 8: Verify the content of the 'Education' section
    await expect(page.locator('text=MSc in Software Engineering - CIn (UFPE)')).toBeVisible();
    await expect(page.locator('text=B.Sc. in Computer Science - CIn (UFPE)')).toBeVisible();

    // Step 9: Verify the content of the 'Professional Experience' section
    await expect(page.locator('text=Sr Software Engineer - iFood')).toBeVisible();
    await expect(page.locator('text=Software Engineer - CESAR')).toBeVisible();
    await expect(page.locator('text=Internship in Software Engineer - Viitra')).toBeVisible();
  });
});
