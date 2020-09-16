

module.exports = {
    'Acessando a pagina principal': function (browser) {
        browser
            //.resizeWindow(1024, 768)
            .url('https://qa-suaigreja.inchurch.com.br')
            .click('button#onesignal-slidedown-cancel-button.align-right.secondary.slidedown-button')
            //.click('button#onesignal-slidedown-cancel-button.align-right.secondary.slidedown-button', 3000)
            .pause('3000')
            .click('.visitor a')
    },
    'LOGIN - Senha invalida': function (browser) {
        browser
            //.resizeWindow(1024, 768)
            .url('https://qa-suaigreja.inchurch.com.br/#/login')
            .setValue('input[name=email]', 'desafio@qa.inchurch.com')
            .setValue('input[name=password]', '123')
            .click('button.btn-style-1.btn-block.ng-binding')
            .waitForElementVisible('div.message.ng-binding')
            .assert.containsText('div.message.ng-binding', 'Senha inválida.')
            .pause('4000')
            .end();
    },
    'LOGIN - Usuario nao cadastrado': function (browser) {
        browser
            //.resizeWindow(1024, 768)
            .url('https://qa-suaigreja.inchurch.com.br/#/login')
            .click('button#onesignal-slidedown-cancel-button.align-right.secondary.slidedown-button')
            .click('.visitor a')
            .setValue('input[name=email]', '123@qa.inchurch.com')
            .setValue('input[name=password]', 'qainchurch')
            .click('button.btn-style-1.btn-block.ng-binding')
            .waitForElementVisible('div.message.ng-binding')
            .assert.containsText('div.message.ng-binding', 'Usuário não cadastrado.')
            .pause('4000')
            .end();
    },

    'LOGIN ok': function (browser) {
        browser
            //.resizeWindow(1024, 768)
            .url('https://qa-suaigreja.inchurch.com.br/#/login')
            .pause('3000')
            .click('button#onesignal-slidedown-cancel-button.align-right.secondary.slidedown-button')
            .click('.visitor a')
            .pause('3000')
            .setValue('input[name=email]', 'desafio@qa.inchurch.com')
            .setValue('input[name=password]', 'qainchurch')
            .waitForElementVisible('input[name=email]')
            .waitForElementVisible('input[name=password]')
            .click('button.btn-style-1.btn-block.ng-binding')
            .pause('3000')
    },

    'Evento para Desafio de QA, selecionando Ticket 1': function (browser) {
        browser
            //.resizeWindow(1024, 768)
            .url('https://qa-suaigreja.inchurch.com.br/#/events/2574')
            .waitForElementVisible('strong.title.ng-binding')
            .click('.btn-small')
            .waitForElementVisible('a.btn-style-1.ng-binding.ng-scope')
            .click('a.btn-style-1.ng-binding.ng-scope')
            .pause('3000')
    },

    'Informações dos participantes': function (browser) {
        browser
            //.resizeWindow(1024, 768)
            .setValue({ selector: '.form-control', index: 0 }, 'qainchurch')
            .setValue({ selector: '.form-control', index: 1 }, '999999-9999')
            .setValue({ selector: '.form-control', index: 2 }, '873.973.880-94')
            .waitForElementVisible({ selector: 'label.ng-binding', index: 0 })
            .waitForElementVisible({ selector: 'label.ng-binding', index: 1 })
            .waitForElementVisible({ selector: 'label.ng-binding', index: 2 })
            .waitForElementVisible('i.fa.fa-check.color-green.ng-scope')
            .click('i.fa.fa-arrow-right.fa-2x')
            .pause('3000')
    },

    'Resumo e a compra de eveto com boleto': function (browser) {
        browser
            //.resizeWindow(1024, 768)
            .click({ selector: '.payment-button', index: 1 })
            .setValue('input[name=cpf]', '873.973.880-94')
            .click('a.btn-style-1.pull-right.ng-binding')
            .pause('5000')
            .click('button.close')
            .pause('3000')
    },

    '2 Evento para Desafio de QA, selecionando Ticket 1': function (browser) {
        browser
            //.resizeWindow(1024, 768)
            .url('https://qa-suaigreja.inchurch.com.br/#/events/2574')
            .click('.btn-small')
            .click('a.btn-style-1.ng-binding.ng-scope')
            .pause('3000')
    },

    '2 Informações dos participantes': function (browser) {
        browser
        //.resizeWindow(1024, 768)
        .setValue({ selector: '.form-control', index: 0 }, 'qainchurch')
        .setValue({ selector: '.form-control', index: 1 }, '999999-9999')
        .setValue({ selector: '.form-control', index: 2 }, '873.973.880-94')
        .waitForElementVisible({ selector: 'label.ng-binding', index: 0 })
        .waitForElementVisible({ selector: 'label.ng-binding', index: 1 })
        .waitForElementVisible({ selector: 'label.ng-binding', index: 2 })
        .waitForElementVisible('i.fa.fa-check.color-green.ng-scope')
        .click('i.fa.fa-arrow-right.fa-2x')
        .pause('3000')
    },

    '2 Resumo e a compra de eveto com cartao': function (browser) {
        browser
            //.resizeWindow(1024, 768)
            .setValue({ selector: '.form-control', index: 0 }, 'MasterCard')
            .setValue({ selector: '.form-control', index: 1 }, '5365230611537326')
            .setValue({ selector: '.form-control', index: 2 }, '5')
            .setValue({ selector: '.form-control', index: 3 }, '2022')
            .setValue({ selector: '.form-control', index: 4 }, '866')
            .setValue({ selector: '.form-control', index: 5 }, '1x')
            .click('a.btn-style-1.pull-right.ng-binding')
            .pause('5000')
            //.waitForElementVisible('div.ui-notification.ng-scope.error.clickable.killed')
            .assert.containsText('div.ui-notification.ng-scope.error.clickable.killed', 'Desculpe, ocorreu um erro inesperado.')
            .pause('10000')
            .end();
    }
}