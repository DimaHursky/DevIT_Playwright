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

test('HRM-8 Дополнительные фильтры - Права доступа сотрудников - Редактирование', async () => {
  const addit_fltrs = new AdditionalFilters(page)
    await addit_fltrs.editing()
    await addit_fltrs.editChkBx.isEnabled() //Перевірки чи елемент з'явився і доступний
    await addit_fltrs.editChkBx.check() //поставити галочку в полі чекбокс (Редактирование) ПРАВА ДОСТУПА СОТРУДНИКОВ
    expect(await (addit_fltrs.editChkBx).isChecked()).toBeTruthy() //перевірка чи проставлений чекбокс "Редактирование"
    await addit_fltrs.performedBtn.click()
    expect(await page.getByAltText('Возможность: Редактирование сотрудников')); //первірка чи зявився фільтр під полем Редактирование сотрудников
});

test('HRM-9 Дополнительные фильтры - Права доступа сотрудников - Чтение', async () => {
const addit_fltrs = new AdditionalFilters(page)
    await addit_fltrs.reading()
    await addit_fltrs.readingChkBx.isEnabled();
    await addit_fltrs.readingChkBx.check() //поставити галочку в полі чекбокс (Чтение) ПРАВА ДОСТУПА СОТРУДНИКОВ
    expect(await (addit_fltrs.readingChkBx).isChecked()).toBeTruthy() //перевірка чи проставлений чекбокс "Чтение"
    await addit_fltrs.performedBtn.click()
    expect(await page.getByAltText('Возможность: Просмотр сотрудников')); //первірка чи зявився фільтр під полем пошуку співробітників
});


//todo
test('HRM-10 Дополнительные фильтры - Роли - Создание', async ( ) => {
  const addit_fltrs = new AdditionalFilters(page)
      await addit_fltrs.reading()
      await addit_fltrs.creationChkBx.isEnabled({ timeout: 1000 }); //чи чек бокс вже доступний
      //await page.waitForTimeout(500)
      await addit_fltrs.creationChkBx.check() //поставити галочку в полі чекбокс
      await page.waitForTimeout(500)
      expect(await (addit_fltrs.creationChkBx).isChecked()).toBeTruthy() //перевірка чи проставлений чекбокс "Создание"
      await addit_fltrs.performedBtn.click()
      expect(await page.getByAltText('Возможность: Создание ролей')); //первірка чи зявився фільтр під Возможность: Создание ролей
  });
