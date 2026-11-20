// @ts-check
const { test, expect } = require('@playwright/test');
const { attachPageErrorCollector, startNewGameFromTitle } = require('../helpers/game');

test.describe('Full game shell', () => {
  test('loads play-game.html without script errors', async ({ page }) => {
    const errors = attachPageErrorCollector(page);
    await page.goto('/play-game.html');
    await expect(page.locator('#game-title')).toBeVisible();
    errors.assertNoErrors();
  });

  test('NEW GAME opens the game and accepts a command', async ({ page }) => {
    const errors = attachPageErrorCollector(page);
    await startNewGameFromTitle(page);
    await expect(page.locator('#game')).toBeVisible();
    await page.locator('#input').focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('#output')).toContainText('You wake up feeling wonderful', { timeout: 15_000 });
    errors.assertNoErrors();
  });

  test('masseur leave and headline checks are not always true', async ({ page }) => {
    const errors = attachPageErrorCollector(page);
    await page.goto('/play-game.html');
    await page.waitForFunction(() => typeof getRoom === 'function');
    const result = await page.evaluate(() => {
      const masseur = getRoom('heal-club26');
      const epilogue = getRoom('epil-3');
      let destination = null;
      const originalEnter = enterRoom;
      enterRoom = (id) => {
        destination = id;
      };
      try {
        prevInput = 'leave';
        destination = null;
        masseur.onBlock();
        const left = destination;

        prevInput = 'wait';
        destination = null;
        masseur.onBlock();
        const waited = destination;

        prevInput = 'no';
        document.getElementById('output').innerHTML = '';
        epilogue.onBlock();
        const declined = document.getElementById('output').innerText;

        return { left, waited, declined };
      } finally {
        enterRoom = originalEnter;
      }
    });

    expect(result.left).toBe('heal-club27');
    expect(result.waited).toBeNull();
    expect(result.declined).toContain('you simply have to hear this');
    errors.assertNoErrors();
  });
});
