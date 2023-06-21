
const { test } = require('@playwright/test');
const { HomePage } = require('../pages/homePage');
const { MealPage } = require('../pages/mealsPage');
const { AddMealPage } = require('../pages/addMealPage');
const percySnapshot = require('@percy/playwright');

const homePage = new HomePage(page);
const mealPage = new MealPage(page);
const addMealPage = new AddMealPage(page);

const name = 'Hamburger';
const price = '30.00';
const amount = '3';

test('TC_1: Validate UIs on the page', async ({ page }) => {
  console.log('Visit home page');
  await page.goto(' http://localhost:3000');

  console.log('Verify HomePage is visible: Logo app & Cart button');
  await homePage.verifyHomePageVisible();

  console.log('Verify Meal Page is visible');
  await mealPage.verifyMealSectionVisible();

  console.log('Verify Add Meal section is visible');
  await addMealPage.verifyAddMealSectionVisible();

  await percySnapshot(page, 'Example Page 1');
});

test('TC_2: Validate the user can add a meal successfully', async ({ page }) => {
  console.log('Visit home page');
  await page.goto(' http://localhost:3000');

  console.log('*** Verify user is navigated to ReactMeals page successfully');
  await homePage.verifyHomePageVisible();

  console.log('*** Add Meal to Your Cart');
  await mealPage.addMealToCart(name, amount);

  console.log('*** Verify amount of meal should be display at the right of Your Cart')
  await expect(cartPage.cartBtn_numberItem).toHaveText(amount);

  console.log('*** Verify the meal info in Your Cart')
  await cartPage.cartBtn.click();
  await cartPage.verifyMealInCart(name, price, amount);

  await percySnapshot(page, 'Example Page 2');
});



