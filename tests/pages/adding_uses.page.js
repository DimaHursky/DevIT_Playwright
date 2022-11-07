const { expect } = require('@playwright/test');
exports.AddingUser = class AddingUser {

    constructor (page) {
        this.page = page;
        
    }

    async randoString() {
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

          await this.page.getByLabel('Имя').fill('Boris' + randomString(10, "a"));
      }

}