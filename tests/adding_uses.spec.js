const {test, expect} = require('@playwright/test');
const { AddingUser } = require('./pages/adding_uses.page');
const { LoginPage } = require('./pages/login_page');
//const {helloworld, hello} = require('./pages/page')

test.beforeEach(async ({ page }, testInfo) => {
    console.log(`adding users  ${testInfo.title}`);
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.validLogin();
})

 test ('Создание профиля сотрудника с валидными данными', async ({page}) => {
  const addingUser = new AddingUser(page)
function randomString(len, an) {
    an = an && an.toLowerCase();
    var str = "",
      i = 0,
      min = an == "a" ? 10 : 0,
      max = an == "n" ? 10 : 62;
    for (; i++ < len;) {
      var r = Math.random() * (max - min) + min << 0;
      str += String.fromCharCode(r += r > 9 ? r < 36 ? 55 : 61 : 48);
    }
    return str;
  }
  
  console.log(randomString(10));      // i.e: "4Z8iNQag9v"
  console.log(randomString(10, "a")); // i.e: "aUkZuHNcWw"
  console.log(randomString(10, "n")); // i.e: "9055739230"


        await page.getByRole('button', { name: 'Добавить' }).click();
        await page.waitForURL('https://hrm-dev.dev-test.pro/employees/create');
        await page.getByLabel('Имя').click();

        await page.getByLabel('Имя').fill('Boris' + randomString(10, "a"));; // randomString(10, "a") - adding random string text
        await page.getByLabel('Фамилия').click();
        await page.getByLabel('Фамилия').fill('Britva');
        await page.getByRole('textbox', { name: 'Номер телефона *' }).click();
        await page.keyboard.type('979531212');
        await page.getByRole('button', { name: 'Choose date' }).click()
        await page.getByRole('button', { name: 'calendar view is open, switch to year view' }).click()
        await page.getByRole('button', { name: '1973' }).click()
        await page.locator('text=18')
       // await page.getByRole('button', { name: '18' }).click()
        await page.getByRole('tab', { name: 'Безопасность' }).click()
        await page.getByRole('textbox', { name: 'Новый пароль *' }).click()
        await page.getByRole('textbox', { name: 'Новый пароль *' }).fill('12345Hur')
        await page.getByLabel('Подтвердить новый пароль').click()
        await page.getByLabel('Подтвердить новый пароль').fill('12345Hur')
        await page.waitForTimeout(1000)
        await page.getByRole('button', { name: 'Сохранить' }).first().click()
        await page.waitForTimeout(500)
        await page.getByText('Данные сотрудника созданы').click()
 })
