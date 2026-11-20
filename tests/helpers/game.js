// @ts-check
const { expect } = require('@playwright/test');

/**
 * Fail the test on uncaught page errors (engine ReferenceError, etc.).
 * @param {import('@playwright/test').Page} page
 */
function attachPageErrorCollector(page) {
  const errors = [];
  page.on('pageerror', (err) => {
    errors.push(err);
  });
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      errors.push(new Error(`console.error: ${msg.text()}`));
    }
  });
  return {
    assertNoErrors() {
      expect(errors, errors.map((e) => e.message).join('\n')).toEqual([]);
    },
  };
}

/**
 * Title screen → options → in-game (title intro room).
 * @param {import('@playwright/test').Page} page
 */
async function startNewGameFromTitle(page) {
  await page.goto('/play-game.html');
  await page.getByRole('button', { name: 'NEW GAME' }).click();
  await page.locator('#begin-game-button button').click();
  await expect(page.locator('#game')).toBeVisible();
  await expect(page.locator('#input')).toBeVisible();
}

/**
 * @param {import('@playwright/test').Page} page
 * @param {string} command
 */
async function playCommand(page, command) {
  const input = page.locator('#input');
  await input.fill(command);
  await input.press('Enter');
}

/**
 * @param {import('@playwright/test').Page} page
 */
async function getOutputText(page) {
  return page.locator('#output').innerText();
}

module.exports = {
  attachPageErrorCollector,
  startNewGameFromTitle,
  playCommand,
  getOutputText,
};
