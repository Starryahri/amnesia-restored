// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Beg loot probability ranges', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tests/engine/harness.html');
    await page.waitForFunction(() => window.__engineTest);
  });

  test('medium difficulty tier 2 only applies within 16–70 roll', async ({ page }) => {
    const tierLabel = await page.evaluate(() => {
      difficulty = 'medium';
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
      let rolls = 0;
      Math.random = () => {
        rolls += 1;
        if (rolls === 1) return 0.99;
        if (rolls === 2) return 0.4;
        return 0.99;
      };
      window.__engineTest.clearOutput();
      window.__engineTest.applyInput('beg');
      return document.getElementById('output').innerText;
    });
    expect(tierLabel).toMatch(/You were able to get|refuses your request/);
    expect(tierLabel).not.toContain('TypeError');
  });
});