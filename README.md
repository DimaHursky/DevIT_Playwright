# DevIT_Ecosystem_PlayWright

npx playwright test ./tests/adding_uses.spec.js --project chromium --headed //для відобреження тесту

npm run lint -перед тим, як запушити зміни робимо перевірку на якість коду

npx playwright test --workers 3 //для зміни кількості вікон в яких буде проходити перевірка тесту

workers: process.env.CI ? 1 : undefined, щоб всі тести проходили в 3 або 4 вікнах одночасно потрібно зімінити значення 'undefined' на потрібне у файлі 'playwright.config.js'

