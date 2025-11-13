describe('Проверка покупки нового аватара', function () {                 
    it('e2e тест на покупку нового аватара для тренера', function () {  
         cy.visit('https://pokemonbattle.ru/');                       // Зашли на сайт
         cy.get('input[id="k_email"]').type ("USER_LOGIN");           // Ввели логин
         cy.get('input[id="k_password"]').type ("USER_PASSWORD");     // Ввели пароль
         cy.get('button[type="submit"]').click();                     // Нажали кнопку "Подтвердить"
         cy.wait(2000);
         cy.get('.header_card_trainer').click();                      // Нажали в шапке на аватарку тренера
         cy.wait(2000);
         cy.get('.k_mobile > :nth-child(5) > #dropdown > img').click();// Нажали кнопку "Смена аватара"
         cy.get('.available > button').first().click();               // Нажали "Купить" у любого аватара
         cy.get('.card_number').type('4111 1111 1111 1111');          // Ввели номер карты
         cy.get('.card_csv').type('125');          // Ввели CVV карты
         cy.get('.card_date').type('1234');                                                   // Ввели срок действия карты
         cy.get('.card_name').type('MILA');                                                   // Ввели имя владельца карты
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();  // Нажали кнопку "Оплатить"
         cy.get('.threeds_number').type('56456');                     // Ввели код подтверждения СМС
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();  // Нажали кнопку "Оплатить"
         cy.contains('Покупка прошла успешно').should('be.visible');   // Проверили, что текст виден пользователю
        cy.get('.style_1_base_link_blue').contains ("Вернуться в магазин");
        cy.get('.style_1_base_link_blue').should('be.visible');
        });
 })