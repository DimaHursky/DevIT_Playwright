const { expect } = require('@playwright/test');
exports.AddingUser = class AddingUser {
  constructor (page) {
    this.page = page;
             this.clkAddBtn = page.getByRole('button', { name: 'Добавить' }).click();
             this.clkNameBtn = page.getByLabel('Имя').click();
             this.fillNameFld = page.getByLabel('Имя').fill('12345' + (10, "a"));
             this.clkLastNaneBtn = page.getByLabel('Фамилия').click();
             this.fillLastName = page.getByLabel('Фамилия').fill('Britva');
             this.clkPhoneNumberFld = page.getByRole('textbox', { name: 'Номер телефона *' }).click();
             this.enterPhoneNumber = page.keyboard.type('979531212');


  }
  // async goto() {
  //   await this.page.goto('https://hrm-dev.dev-test.pro/');
  // }

async createUser(firstName, lastName) {

//await page.pause()
/** 
        //await page.getByRole('button', { name: 'Добавить' }).click();
        await this.page.clkAddBtn
        //await page.pause()
        //await page.waitForURL('https://hrm-dev.dev-test.pro/employees/create');
        //await page.getByLabel('Имя').click();
        await this.page.clkNameBtn

        //await page.getByLabel('Имя').fill('12345' + (10, "a")); // randomString(10, "a") - adding random string text
        await this.page.fillNameFld

        //await page.getByLabel('Фамилия').click();
        await this.page.clklastManeBtn

        //await page.getByLabel('Фамилия').fill('Britva');
        await this.page.fillLastName

        //await page.getByRole('textbox', { name: 'Номер телефона *' }).click();
        await this.page.clkPhoneNumberFld

        //await page.keyboard.type('979531212');
        await this.page.enterPhoneNumber
*/
      await this.page.getByRole('button', { name: 'Добавить' }).click();
      await this.page.waitForURL('https://hrm-dev.dev-test.pro/employees/create');
      await this.page.getByLabel('Имя').click();
      //await this.page.getByLabel('Имя').fill('11234569'); // randomString(10, "a") - adding random string text

      await this.page.getByLabel('Имя').fill(firstName);


      await this.page.getByLabel('Фамилия').click();
      await this.page.getByLabel('Фамилия').fill(lastName);
      await this.page.getByRole('textbox', { name: 'Номер телефона *' }).click();
      await this. page.keyboard.type('979531212');
      await this.page.getByRole('button', { name: 'Choose date' }).click()
      await this.page.getByRole('button', { name: 'calendar view is open, switch to year view' }).click()
      await this.page.getByRole('button', { name: '1973' }).click()
      await this.page.getByText('18').click()
      await this.page.getByRole('tab', { name: 'Безопасность' }).click()
      await this.page.getByRole('textbox', { name: 'Новый пароль *' }).click()
      await this.page.getByRole('textbox', { name: 'Новый пароль *' }).fill('12345Hur')
      await this.page.getByLabel('Подтвердить новый пароль').click()
      await this.page.getByLabel('Подтвердить новый пароль').fill('12345Hur')
      await this.page.waitForTimeout(1000)
      await this.page.getByRole('button', { name: 'Сохранить' }).first().click()
      await this.page.waitForTimeout(500)
      // await this.page.getByText('Данные сотрудника созданы').click()
}  }