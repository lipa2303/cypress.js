describe('Проверка авторизации', function () {

   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали кнопку войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // После авторизации виден текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю

})

it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки "Восстановить пароль"
        cy.get('#forgotEmailButton').click(); // Нажимаем кнопку "Восстановить пароль"
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввели почту для восстановления пароля
        cy.get('#restoreEmailButton').click(); // Нажимаем кнопку "Отправить код"
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // После отправки кода виден текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю

})

it('Верный логин и неверный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('ILoveqastudio1'); // Ввели неверный пароль
        cy.get('#loginButton').click(); // Нажали кнопку войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // После ошибки авторизации виден текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю

})

it('Неверный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('german@dolnikova.ru'); // Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали кнопку войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // После ошибки авторизации виден текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
})

it('Проверка валидации', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали кнопку войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // После ошибки авторизации виден текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
})

it('Проверка строчных букв в логине', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели логин со строчными буквами
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали кнопку войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // После авторизации виден текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
})
})