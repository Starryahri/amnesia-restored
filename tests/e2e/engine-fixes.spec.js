// @ts-check
const { test, expect } = require('@playwright/test');
const { attachPageErrorCollector } = require('../helpers/game');

test.describe('Engine harness (Priority 1 regressions)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tests/engine/harness.html');
    await page.waitForFunction(() => window.__engineTest);
  });

  test('read inventory item does not crash', async ({ page }) => {
    const errors = attachPageErrorCollector(page);
    await page.evaluate(() => {
      window.__engineTest.clearOutput();
      window.__engineTest.applyInput('read note');
    });
    await expect(page.locator('#output')).toContainText('testing works');
    errors.assertNoErrors();
  });

  test('read missing item shows message without crash', async ({ page }) => {
    const errors = attachPageErrorCollector(page);
    await page.evaluate(() => {
      window.__engineTest.clearOutput();
      window.__engineTest.applyInput('read unicorn');
    });
    await expect(page.locator('#output')).toContainText("There's nothing to read");
    errors.assertNoErrors();
  });

  test('remove missing clothing does not crash', async ({ page }) => {
    const errors = attachPageErrorCollector(page);
    await page.evaluate(() => {
      window.__engineTest.clearOutput();
      window.__engineTest.applyInput('remove hat');
    });
    await expect(page.locator('#output')).toContainText("don't have that");
    errors.assertNoErrors();
  });

  test('asking command is defined and runs', async ({ page }) => {
    const errors = attachPageErrorCollector(page);
    const result = await page.evaluate(() => {
      window.__engineTest.clearOutput();
      window.__engineTest.applyInput('asking');
      return window.__engineTest.getOutputText();
    });
    expect(result.length).toBeGreaterThan(0);
    errors.assertNoErrors();
  });

  test('beg loot high tier uses Math.floor (no TypeError)', async ({ page }) => {
    const errors = attachPageErrorCollector(page);
    await page.evaluate(() => {
      difficulty = 'easy';
      playMon = 0;
      disk.roomId = 'street-test';
      if (!getRoom('street-test')) {
        disk.rooms.push({
          id: 'street-test',
          name: 'Test Street',
          desc: '',
          isStreet: true,
          coord: [0, 0],
          items: [],
          exits: [],
        });
      }
      disk.roomId = 'street-test';
      let n = 0;
      Math.random = () => {
        n += 1;
        if (n === 1) return 0.9;
        if (n === 2) return 0.99;
        return 0.5;
      };
      window.__engineTest.clearOutput();
      window.__engineTest.applyInput('beg');
    });
    await expect(page.locator('#output')).not.toContainText('TypeError');
    errors.assertNoErrors();
  });
});
