// @ts-check
const { test, expect } = require('@playwright/test');
const { attachPageErrorCollector } = require('../helpers/game');

test.describe('Engine regressions', () => {
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

  test('read missing item shows a message', async ({ page }) => {
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

  test('remove takes one clothing id out of the slot', async ({ page }) => {
    const errors = attachPageErrorCollector(page);
    const remaining = await page.evaluate(() => {
      disk.inventory.push({
        name: ['shirt'],
        itemId: 'shirt-id',
        top: true,
        isHidden: false,
      });
      playCloth.top = ['decoy', 'shirt-id'];
      window.__engineTest.clearOutput();
      window.__engineTest.applyInput('remove shirt');
      return playCloth.top.slice();
    });
    expect(remaining).toEqual(['decoy']);
    errors.assertNoErrors();
  });

  test('player input is escaped', async ({ page }) => {
    const errors = attachPageErrorCollector(page);
    const html = await page.evaluate(() => {
      window.__engineTest.clearOutput();
      window.__engineTest.applyInput('<img src=x onerror=alert(1)>');
      return window.__engineTest.outputHtml();
    });
    expect(html).toContain('&lt;img');
    expect(html).not.toContain('<img');
    errors.assertNoErrors();
  });

  test('save and load restore money', async ({ page }) => {
    const errors = attachPageErrorCollector(page);
    const money = await page.evaluate(() => {
      playMon = 42.5;
      window.__engineTest.save('engine-test-save');
      playMon = 0;
      window.__engineTest.load('engine-test-save');
      return playMon;
    });
    expect(money).toBe(42.5);
    errors.assertNoErrors();
  });

  test('save reviver does not eval ordinary strings', async ({ page }) => {
    const errors = attachPageErrorCollector(page);
    const label = await page.evaluate(() => {
      const raw = JSON.stringify({
        version: 2,
        disk: {
          roomId: 'test-room',
          currPos: [10, 10],
          inventory: [],
          characters: [],
          rooms: disk.rooms,
          label: '1',
          note: '(hello there)',
        },
        playerState: { playMon: 3 },
      });
      loadGameFromStorage(raw);
      return { label: disk.label, note: disk.note, playMon };
    });
    expect(label).toEqual({ label: '1', note: '(hello there)', playMon: 3 });
    errors.assertNoErrors();
  });

  test('medium beg tiers pay the commented cent ranges', async ({ page }) => {
    const errors = attachPageErrorCollector(page);
    const payouts = await page.evaluate(() => {
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
      policeCaughtBegging = false;
      difficulty = 'medium';

      const roll = (chance2Random, dollarRandom) => {
        const rolls = [0.5, chance2Random, dollarRandom];
        let i = 0;
        Math.random = () => rolls[Math.min(i++, rolls.length - 1)];
        playMon = 0;
        window.__engineTest.clearOutput();
        window.__engineTest.applyInput('beg');
        return {
          money: playMon,
          text: window.__engineTest.getOutputText(),
        };
      };

      return {
        low: roll(0.19, 0),
        high: roll(0.94, 0),
        nothing: roll(0.05, 0),
      };
    });

    expect(payouts.low.money).toBeCloseTo(0.25, 2);
    expect(payouts.high.money).toBeCloseTo(1.76, 2);
    expect(payouts.nothing.money).toBe(0);
    expect(payouts.nothing.text).toContain('refuses your request');
    errors.assertNoErrors();
  });

  test('cross-street table uses in-range avenue numbers', async ({ page }) => {
    const block = await page.evaluate(() => {
      const seven = xStreetNumber.find((row) => row.name === '700-799').value;
      const eight = xStreetNumber.find((row) => row.name === '800-899').value;
      return { seven, eightFourth: eight[4] };
    });
    expect(block.seven).not.toContain(512);
    expect(block.seven).toContain(52);
    expect(block.eightFourth).toBe(95);
  });
});
