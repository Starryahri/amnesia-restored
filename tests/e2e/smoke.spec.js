// @ts-check
const { test, expect } = require('@playwright/test');
const {
  attachPageErrorCollector,
  startNewGameFromTitle,
} = require('../helpers/game');

test.describe('Full game shell', () => {
  test('loads play-game.html without script errors', async ({ page }) => {
    const errors = attachPageErrorCollector(page);
    await page.goto('/play-game.html');
    await expect(page.locator('#game-title')).toBeVisible();
    errors.assertNoErrors();
  });

  test('NEW GAME → BEGIN GAME opens the game panel', async ({ page }) => {
    const errors = attachPageErrorCollector(page);
    await startNewGameFromTitle(page);
    await expect(page.locator('#game')).toBeVisible();
    await expect(page.locator('#input')).toBeVisible();
    await expect(page.locator('#currroom')).not.toBeEmpty();
    errors.assertNoErrors();
  });
});
