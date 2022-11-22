const {expect, waitForTimeout, waitForSelector, isEnabled, check} = require('@playwright/test');
exports.AdditionalFilters = class AdditionalFilters {
    
constructor(page) {
    this.page = page;
    this.additionalFiltersBtn  = page.locator('text = Дополнительные фильтры', { timeout: 1000 })
    this.accessRightsBtn = page.locator('text = Права Доступа') //Права Доступа випадаючий список

    // ПРАВА ДОСТУПА СОТРУДНИКОВ
    this.editChkBx = page.locator('#PolarisOptionList1-1 label:has-text("Редактирование") div >> nth=2') // Редактирование чек бокс
    this.readingChkBx = page.locator(':nth-match(:text("Чтение"), 1)') // - Чтение 

    //РОЛИ
    this.creationChkBx = page.locator('#PolarisOptionList1-2 >> text=Создание') // - Создание
    //:nth-match(:text("Создание"), 1)


    this.performedBtn = page.locator('text = Выполнено')
    this.wait = page.waitForTimeout(2000)
    this.pause = page.pause()

    }
    async editing() {
        await this.additionalFiltersBtn.click(); //Відкрити меню (Дополнительные фильтры)
        await this.accessRightsBtn.click({ timeout: 1000 }); //відкрити випадаючий список (права доступу)
        // await this.editChkBx.isEnabled() //Перевірки чи елемент з'явився і доступний
        // await this.editChkBx.check() //поставити галочку в полі чекбокс (Редактирование) ПРАВА ДОСТУПА СОТРУДНИКОВ
    }  

    async reading() {
        await this.additionalFiltersBtn.click();
        await this.accessRightsBtn.click({ timeout: 1000 });
        // await this.readingChkBx.isEnabled();
        // await this.readingChkBx.check() //поставити галочку в полі чекбокс (Чтение) ПРАВА ДОСТУПА СОТРУДНИКОВ
    }  
}