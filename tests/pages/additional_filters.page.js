const {expect, waitForTimeout, waitForSelector, isEditable} = require('@playwright/test');
exports.AdditionalFilters = class AdditionalFilters {
    
constructor(page) {
    this.page = page;
    this.additionalFiltersBtn  = page.locator('text = Дополнительные фильтры')
    this.accessRightsBtn = page.locator('text = Права Доступа') //Права Доступа 
    this.waitForEdit1CheckBox = page.waitForSelector('#PolarisOptionList1-1 label:has-text("Редактирование") div >> nth=2')
    this.edit1CheckBox = page.locator('#PolarisOptionList1-1 label:has-text("Редактирование") div >> nth=2') //ПРАВА ДОСТУПА СОТРУДНИКОВ - Редактирование
    this.readingCheckBox = page.locator(':nth-match(:text("Чтение"), 1)') //ПРАВА ДОСТУПА СОТРУДНИКОВ - Чтение
    this.performedBtn = page.locator('text = Выполнено')
    this.wait = page.waitForTimeout(1000)
    this.pause = page.pause()

    }
    async chacBpx() {
    await this.additionalFiltersBtn.click({ timeout: 5000 });
    await this.accessRightsBtn.click({ timeout: 10000 });
    //await this.waitForSelector.edit1CheckBox
    await this.edit1CheckBox.isEditable()

    //await this.waitForEdit1CheckBox

    
    //await this.wait
    
    //await this.page.waitForSelector(':nth-match(:text("Редактирование"), 1)')
    //await this.edit1CheckBox.click({ timeout: 1000 });
    //перевірка чи проставлений чекбокс

    
    
        }  

async chacBpx2() {
    await this.additionalFiltersBtn.click();
    await this.accessRightsBtn.click();
    await this.wait;
    await this.readingCheckBox.click();
    //перевірка чи проставлений чекбокс "Чтение"
    expect(await page.locator('#PolarisOptionList1-1 label:has-text("Чтение") div >> nth=2').isChecked()).toBeTruthy()
    //#PolarisOptionList1-1 >> text=Чтение
    //#PolarisOptionList1-1 label:has-text("Чтение") div >> nth=2
   await this.performedBtn.click()
   //первірка чи зявився фільтр під полем пошуку співробітників
   expect(await page.getByAltText('Возможность: Просмотр сотрудников'));

        }  
}