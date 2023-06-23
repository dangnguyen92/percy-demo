
const { test } = require('@playwright/test');
const { HomePage } = require('../pages/homePage');
const { MealPage } = require('../pages/mealsPage');
const { AddMealPage } = require('../pages/addMealPage');
const percySnapshot = require('@percy/playwright');

const name = 'Hamburger';
const price = '30.00';
const amount = '3';

test('TC_1: Validate UIs on the page', async ({ page }) => {
  const homePage = new HomePage(page);
  const mealPage = new MealPage(page);
  const addMealPage = new AddMealPage(page);

  console.log('Visit home page');
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });

  console.log('Verify HomePage is visible: Logo app & Cart button');
  await homePage.verifyHomePageVisible();

  console.log('Verify Add Meal section is visible');
  await addMealPage.verifyAddMealSectionVisible();

  await percySnapshot(page, 'Home Page');
});




