const { test, expect, check } = require('@playwright/test');
const { AdditionalFilters } = require('./pages/additional_filters.page');
const { LoginPage } = require('./pages/login_page');
//test.describe.configure({ mode: 'serial' });

/** @type {import('@playwright/test').Page} */
let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
 
  const loginPage = new LoginPage(page)
    await loginPage.goto();
    await loginPage.validLogin();
    
});

// /**
//  * Дополнительные фильтры
//  */

test('runs first', async () => {
    //const adding_uses = new AddingUser(page)
    const additional_filters = new AdditionalFilters(page)

    //await page.pause()
    await additional_filters.chacBpx()

    // await additional_filters.additionalFiltersBtn .click()
    // await additional_filters.accessRightsBtn.click({ timeout: 5000 })
    // await additional_filters.wait
    //await page.waitForSelector(':nth-match(:text("Редактирование"), 1') //waitForTimeout(500)
    //await page.waitForSelector('#PolarisOptionList1-1 label:has-text("Редактирование") div >> nth=2')
    await additional_filters.edit1CheckBox.check()
    expect(await page.locator('#PolarisOptionList1-1 label:has-text("Редактирование") div >> nth=2').isChecked()).toBeTruthy()
    await additional_filters.performedBtn.click()
    expect(await page.getByAltText('Возможность: Редактирование сотрудников'));




   
    // await page.locator('text = Дополнительные фильтры').click()
    // await page.locator('text = Права Доступа').click()
    // await page.locator(':nth-match(:text("Редактирование"), 1)').check()
    // expect(await page.locator('#PolarisOptionList1-1 label:has-text("Редактирование") div >> nth=2').isChecked()).toBeTruthy()
    // await page.locator('text = Выполнено').click()
    // expect(await page.getByAltText('Возможность: Редактирование сотрудников'));

});

// test.only('runs firsta', async () => {
//   //const adding_uses = new AddingUser(page)
//   const additional_filters = new AdditionalFilters(page)
// await page.pause()
// await additional_filters.chacBpx2()
// await page.waitForTimeout(500)


// });
