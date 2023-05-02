import { test, expect } from '@playwright/test';

const TEST_TEST_EMPTY = '';
const TEST_TEST_SPACES = '       ';
const TEST_TEXT_NO_NUMBERS = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const TEST_TEXT_NUMBERS = 'Si tengo 8 manzanas y compro 2 más, ¿cúantas manzanas tengo en total?';
const TEST_TEXT_DECIMALS = 'Calcular la suma de 1.65 más 0.15 y más 1.10';
const TEST_TEXT_NOT_A_NUMBER = 'Esto no es un número: 41u0003jot';
const TEST_TEXT_PUNCTUATION_MARKS = '.,;:"«»[]{}()¿?¡!-';

test.describe('Para el texto "' + TEST_TEXT_NO_NUMBERS + '"', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByRole('textbox').click();
    await page.getByRole('textbox').type(TEST_TEXT_NO_NUMBERS);
  });

  test('Caracteres: 123', async ({ page }) => {
    const listItem = await page.getByRole('listitem');
    await expect(listItem.filter({ hasText: /\b123\b/i })).toBeVisible();
  });
  test('Caracteres Sin Espacios: 102', async ({ page }) => {
    const listItem = await page.getByRole('listitem');
    await expect(listItem.filter({ hasText: /\b102\b/i })).toBeVisible();
  });
  test('Palabras: 19', async ({ page }) => {
    const listItem = await page.getByRole('listitem');
    await expect(listItem.filter({ hasText: /\b19\b/i })).toBeVisible();

  });
  test('Números: 0', async ({ page }) => {
    const listItem = await page.getByRole('listitem');
    await expect(listItem.filter({ hasText: /\b0\b/i })).toHaveCount(2);
  });

  test('Suma números: 0', async ({ page }) => {
    const listItem = await page.getByRole('listitem');
    await expect(listItem.filter({ hasText: /\b0\b/i })).toHaveCount(2);
  });

  test('Longitud promedio palabra: 5.37', async ({ page }) => {
    const listItem = await page.getByRole('listitem');
    await expect(listItem.filter({ hasText: /\b5\.37\b/i })).toBeVisible();
  });
});

test.describe('Para el texto "' + TEST_TEXT_NUMBERS + '"', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByRole('textbox').click();
    await page.getByRole('textbox').type(TEST_TEXT_NUMBERS);
  });

  test('Números: 2', async ({ page }) => {
    const listItem = await page.getByRole('listitem');
    await expect(listItem.filter({ hasText: /\b2\b/i })).toBeVisible();
  });

  test('Suma números: 10', async ({ page }) => {
    const listItem = await page.getByRole('listitem');
    await expect(listItem.filter({ hasText: /\b10\b/i })).toBeVisible();
  });
});

test.describe('Para el texto "' + TEST_TEXT_DECIMALS + '"', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByRole('textbox').click();
    await page.getByRole('textbox').type(TEST_TEXT_DECIMALS);
  });

  test('Números: 3', async ({ page }) => {
    const listItem = await page.getByRole('listitem');
    await expect(listItem.filter({ hasText: /\b3\b/i })).toBeVisible();
  });

  test('Suma números: 2.9', async ({ page }) => {
    const listItem = await page.getByRole('listitem');
    await expect(listItem.filter({ hasText: /\b2\.9\b/i })).toBeVisible();
  });
});

test.describe('Para el texto "' + TEST_TEXT_NOT_A_NUMBER + '"', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByRole('textbox').click();
    await page.getByRole('textbox').type(TEST_TEXT_NOT_A_NUMBER);
  });

  test('Números: 0', async ({ page }) => {
    const listItem = await page.getByRole('listitem');
    await expect(listItem.filter({ hasText: /\b0\b/i })).toHaveCount(2);
  });

  test('Suma números: 0', async ({ page }) => {
    const listItem = await page.getByRole('listitem');
    await expect(listItem.filter({ hasText: /\b0\b/i })).toHaveCount(2);
  });
});

test.describe('Para el texto "' + TEST_TEXT_PUNCTUATION_MARKS + '"', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByRole('textbox').click();
    await page.getByRole('textbox').type(TEST_TEXT_PUNCTUATION_MARKS);
  });

  test('Caracteres: 18', async ({ page }) => {
    const listItem = await page.getByRole('listitem');
    await expect(listItem.filter({ hasText: /\b18\b/i })).toBeVisible();
  });

  test('Caracteres Sin Espacios: 0', async ({ page }) => {
    const listItem = await page.getByRole('listitem');
    await expect(listItem.filter({ hasText: /\b0\b/i })).toHaveCount(5);
  });
  test('Palabras: 0', async ({ page }) => {
    const listItem = await page.getByRole('listitem');
    await expect(listItem.filter({ hasText: /\b0\b/i })).toHaveCount(5);
  });
  test('Números: 0', async ({ page }) => {
    const listItem = await page.getByRole('listitem');
    await expect(listItem.filter({ hasText: /\b0\b/i })).toHaveCount(5);
  });

  test('Suma números: 0', async ({ page }) => {
    const listItem = await page.getByRole('listitem');
    await expect(listItem.filter({ hasText: /\b0\b/i })).toHaveCount(5);
  });

  test('Longitud promedio palabra: 0', async ({ page }) => {
    const listItem = await page.getByRole('listitem');
    await expect(listItem.filter({ hasText: /\b0\b/i })).toHaveCount(5);
  });
});
