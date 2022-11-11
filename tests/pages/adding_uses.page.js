const { expect } = require('@playwright/test');
exports.AddingUser = class AddingUser {
  constructor (page) {
    this.page = page;
    this.pause = page.pause();
      this.clkAddBtn = page.getByRole('button', { name: 'Добавить' }).click();
      this.waitEmployeUrl = page.waitForURL('https://hrm-dev.dev-test.pro/employees/create');
      this.nameBtn = page.getByLabel('Имя')
      this.lastNaneBtn = page.getByLabel('Фамилия')
      this.phoneNumberFld = page.getByRole('textbox', { name: 'Номер телефона *' })
      this.chooseDate = page.getByRole('button', { name: 'Choose date' })
      this.openYearsPopup = page.getByRole('button', { name: 'calendar view is open, switch to year view' })
      this.year1973 = page.getByRole('button', { name: '1973' })
      this.year2005 = page.getByRole('button', { name: '2006' })
      this.day1 = page.getByText('1').first()
      this.secyrityTab = page.getByRole('tab', { name: 'Безопасность' })
      this.emploiDataTab = page.getByRole('tab', { name: 'Данные сотрудника' })
      this.newPasswordFld = page.getByRole('textbox', { name: 'Новый пароль *' })
      this.confirmPasswordFld = page.getByLabel('Подтвердить новый пароль')
      this.saveBtn = page.getByRole('button', { name: 'Сохранить' }).first()
      this.pause = page.pause();

  }

  async validLogin(firstName, lastName) {
            
   
             await this.clkAddBtn
             await this.waitEmployeUrl
             await this.nameBtn.click();
             await this.nameBtn.fill(firstName);
             await this.lastNaneBtn.click();
             await this.lastNaneBtn.fill(lastName);
             await this.phoneNumberFld.click();
             await this.page.keyboard.type('979531212');
             await this.chooseDate.click()
             await this.openYearsPopup.click()
             await this.year1973.click()
             await this.day1.click()
             await this.secyrityTab.click()
             await this.newPasswordFld.click()
             await this.newPasswordFld.fill('12345Hur')
             await this.confirmPasswordFld.click()
             await this.confirmPasswordFld.fill('12345Hur')
             await this.page.waitForTimeout(1000)
             await this.saveBtn.click()
             await this.page.waitForTimeout(500)

          //await this.page.getByRole('button', { name: 'Добавить' }).click();
          //await this.page.waitForURL('https://hrm-dev.dev-test.pro/employees/create');
          //await this.page.getByLabel('Имя').click();  
          //await this.page.getByLabel('Имя').fill(firstName);
          //await this.page.getByLabel('Фамилия').click();
          //await this.page.getByLabel('Фамилия').fill(lastName);
          //await this.page.getByRole('textbox', { name: 'Номер телефона *' }).click();
          //await this. page.keyboard.type('979531212');
          //await this.page.getByRole('button', { name: 'Choose date' }).click()
          //await this.page.getByRole('button', { name: 'calendar view is open, switch to year view' }).click()
          //await this.page.getByRole('button', { name: '1973' }).click()
          //await this.page.getByText('18').click()
          //await this.page.getByRole('tab', { name: 'Безопасность' }).click()
          //await this.page.getByRole('textbox', { name: 'Новый пароль *' }).click()
          //await this.page.getByRole('textbox', { name: 'Новый пароль *' }).fill('12345Hur')
          //await this.page.getByLabel('Подтвердить новый пароль').click()
          //await this.page.getByLabel('Подтвердить новый пароль').fill('12345Hur')
          //await this.page.waitForTimeout(1000)
          //await this.page.getByRole('button', { name: 'Сохранить' }).first().click()
          //await this.page.waitForTimeout(500)

    }  

async createUser(firstName, lastName) {


  await this.clkAddBtn
  await this.waitEmployeUrl
  await this.nameBtn.click();
  await this.nameBtn.fill(firstName);
  await this.lastNaneBtn.click();
  await this.lastNaneBtn.fill(lastName);
  await this.phoneNumberFld.click();
  await this.page.keyboard.type('979531212');
  await this.chooseDate.click()
  await this.openYearsPopup.click()
  await this.year1973.click()
  await this.day1.click()
  await this.secyrityTab.click()
  await this.newPasswordFld.click()
  await this.newPasswordFld.fill('12345Hur')
  await this.confirmPasswordFld.click()
  await this.confirmPasswordFld.fill('12345Hur')
  await this.emploiDataTab.click()
}

async noPhoneNumber(firstName, lastName, phoneNumber) {
  await this.clkAddBtn
  await this.waitEmployeUrl
  await this.nameBtn.click();
  await this.nameBtn.fill(firstName);
  await this.lastNaneBtn.click();
  await this.lastNaneBtn.fill(lastName);
  await this.chooseDate.click()
  await this.openYearsPopup.click()
  await this.year1973.click()
  await this.day1.click()
  await this.emploiDataTab.click()
  await this.phoneNumberFld.click();
  await this.page.keyboard.type(phoneNumber); 
  await this.nameBtn.click();
}

async wrongYear(firstName, lastName) {

  await this.clkAddBtn
  await this.waitEmployeUrl
  await this.nameBtn.click();
  await this.nameBtn.fill(firstName);
  await this.lastNaneBtn.click();
  await this.lastNaneBtn.fill(lastName);
  await this.chooseDate.click()
  await this.openYearsPopup.click()
  await this.year2005.click()
  await this.day1.click()
  await this.emploiDataTab.click()
  await this.phoneNumberFld.click();
  await this.page.keyboard.type('979531212'); 
  await this.nameBtn.click();
}

async noBirsdayDate(firstName, lastName) {

  await this.clkAddBtn
  await this.waitEmployeUrl
  await this.nameBtn.click();
  await this.nameBtn.fill(firstName);
  await this.lastNaneBtn.click();
  await this.lastNaneBtn.fill(lastName);
  await this.phoneNumberFld.click();
  await this.page.keyboard.type('979531212');
  await this.secyrityTab.click()
  await this.newPasswordFld.click()
  await this.newPasswordFld.fill('12345Hur')
  await this.confirmPasswordFld.click()
  await this.confirmPasswordFld.fill('12345Hur')
  await this.emploiDataTab.click()
}
async emptyPassvordFil(newPassword, confirmPassword) {
            
  await this.clkAddBtn
  await this.waitEmployeUrl
  await this.nameBtn.click();
  await this.nameBtn.fill('Boris');
  await this.lastNaneBtn.click();
  await this.lastNaneBtn.fill('Britva');
  await this.phoneNumberFld.click();
  await this.page.keyboard.type('979531212');
  await this.chooseDate.click()
  await this.openYearsPopup.click()
  await this.year1973.click()
  await this.day1.click()
  await this.secyrityTab.click()
  await this.newPasswordFld.click()
  await this.newPasswordFld.fill(newPassword)
  await this.confirmPasswordFld.click()
  await this.confirmPasswordFld.fill(confirmPassword)
}  
}