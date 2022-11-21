const {expect, waitForTimeout, waitForSelector, isEnabled, check} = require('@playwright/test');
exports.AdditionalFilters = class AdditionalFilters {
    
constructor(page) {
    this.page = page;
    this.additionalFiltersBtn  = page.locator('text = Дополнительные фильтры', { timeout: 1000 })
    this.accessRightsBtn = page.locator('text = Права Доступа') //Права Доступа випадаючий список

    // ПРАВА ДОСТУПА СОТРУДНИКОВ
    this.edit1CheckBox = page.locator('#PolarisOptionList1-1 label:has-text("Редактирование") div >> nth=2') // Редактирование

    this.readingCheckBox = page.locator(':nth-match(:text("Чтение"), 1)') // - Чтение


    //РОЛИ

    this.performedBtn = page.locator('text = Выполнено')
    this.wait = page.waitForTimeout(2000)
    this.pause = page.pause()

    }
    async chacBpx() {
    await this.additionalFiltersBtn.click();
    await this.accessRightsBtn.click({ timeout: 1000 });
    await this.edit1CheckBox.isEnabled()
    await this.edit1CheckBox.check()
    
    //await this.waitForEdit1CheckBox

    
    //await this.wait
    
    //await this.page.waitForSelector(':nth-match(:text("Редактирование"), 1)')
    //await this.edit1CheckBox.click({ timeout: 1000 });
    //перевірка чи проставлений чекбокс

    
    
        }  

async chacBpx2() {
    await this.additionalFiltersBtn.click();
    await this.accessRightsBtn.click({ timeout: 1000 });
    await this.readingCheckBox.isEnabled();
    await this.readingCheckBox.check()
    //await this.readingCheckBox.click();
        }  
}