// @ts-check
const { expect } = require('@playwright/test');

/**
 * @param {import('@playwright/test').Page} page
 */
function attachPageErrorCollector(page) {
  const errors = [];
  page.on('pageerror', (err) => {
    errors.push(err);
  });
  return {
    assertNoErrors() {
      expect(errors, errors.map((e) => e.message).join('\n')).toEqual([]);
    },
  };
}

/**
 * @param {import('@playwright/test').Page} page
 */
async function startNewGameFromTitle(page) {
  await page.goto('/play-game.html');
  await page.getByRole('button', { name: 'NEW GAME' }).click();
  await page.locator('#begin-game-button button').click();
  await expect(page.locator('#game')).toBeVisible();
  await expect(page.locator('#input')).toBeVisible();
}

module.exports = {
  attachPageErrorCollector,
  startNewGameFromTitle,
};
