const { test, expect, check } = require('@playwright/test');
const { AdditionalFilters } = require('./pages/additional_filters.page');
const { LoginPage } = require('./pages/login_page');
//test.describe.configure({ mode: 'serial' });

/** @type {import('@playwright/test').Page} */
let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
 
  const loginPage = new LoginPage(page)
    await loginPage.goto(); //Перехід на сторінку логіну
    await loginPage.validLogin(); //Логін користувача валідними данними
    
});

// /**
//  * Дополнительные фильтры
//  */

test('runs first', async () => {
  const additional_filters = new AdditionalFilters(page)
    await additional_filters.chacBpx()
    //перевірка чи проставлений чекбокс "Редактирование"
    expect(await page.locator('#PolarisOptionList1-1 label:has-text("Редактирование") div >> nth=2').isChecked()).toBeTruthy() 
    await additional_filters.performedBtn.click()
    expect(await page.getByAltText('Возможность: Редактирование сотрудников')); //первірка чи зявився фільтр під полем Редактирование сотрудников
});

test('runs firsta', async () => {
const additional_filters = new AdditionalFilters(page)
    await additional_filters.chacBpx2()
    //перевірка чи проставлений чекбокс "Чтение"
    expect(await (additional_filters.readingCheckBox).isChecked()).toBeTruthy()
    await additional_filters.performedBtn.click()
    expect(await page.getByAltText('Возможность: Просмотр сотрудников')); //первірка чи зявився фільтр під полем пошуку співробітників

});
