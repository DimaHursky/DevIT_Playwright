const {expect, waitForTimeout, waitForSelector, isEnabled, check} = require('@playwright/test');
exports.AdditionalFilters = class AdditionalFilters {
    
constructor(page) {
    this.page = page;
    this.additionalFiltersBtn  = page.locator('text = Дополнительные фильтры', { timeout: 1000 })
    this.accessRightsBtn = page.locator('text = Права Доступа') //Права Доступа випадаючий список

    // ПРАВА ДОСТУПА СОТРУДНИКОВ
    this.editChkBx = page.locator('#PolarisOptionList1-1 label:has-text("Редактирование") div >> nth=2') // Редактирование чек бокс
    this.featureToEditEmployees = page.getByAltText('Возможность: Редактирование сотрудников')

    this.readingChkBx = page.locator(':nth-match(:text("Чтение"), 1)') // - Чтение 
    this.featureViewEmployees = page.getByAltText('Возможность: Просмотр сотрудников')

    //РОЛИ
    this.creationChkBx = page.locator('#PolarisOptionList1-2 >> text=Создание') // - Создание
    this.featureCreateRoles = page.getByAltText('Возможность: Создание ролей')

    this.


    this.performedBtn = page.locator('text = Выполнено')
    this.wait = page.waitForTimeout(500)
    this.pause = page.pause()

    }
    async openAccessRightRoledown() {
        await this.additionalFiltersBtn.click(); //Відкрити меню (Дополнительные фильтры)
        await this.accessRightsBtn.click({ timeout: 3000 }); //відкрити випадаючий список (права доступу)
        await this.wait
    }  


}