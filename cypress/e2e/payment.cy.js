describe('Payment', { testIsolation: false }, () => {
    beforeEach(() => {
        cy.visit('https://demo.midtrans.com/')
        cy.url().should('include', 'midtrans.com')
        cy.BuyNow()
    })

    it('Make a payment with Gopay', () => {
        cy.get('iframe#snap-midtrans')
            .iframe().find('a[href="#/gopay-qris"]').click()
            .iframe().find('.primary').click();
    });

    it('Make a payment with BCA VA', () => {
        cy.get('iframe#snap-midtrans')
            .iframe().find('a[href="#/bank-transfer"]').click()
            .iframe().find('a[href="#/bank-transfer/bca-va"]').click()
            .iframe().find('.primary').click();
    });

    it('Make a payment with Mandiri VA ', () => {
        cy.get('iframe#snap-midtrans')
            .iframe().find('a[href="#/bank-transfer"]').click()
            .iframe().find('a[href="#/bank-transfer/mandiri-va"]').click()
            .iframe().find('.primary').click();
    });

    it('Make a payment with BNI VA', () => {
        cy.get('iframe#snap-midtrans')
            .iframe().find('a[href="#/bank-transfer"]').click()
            .iframe().find('a[href="#/bank-transfer/bni-va"]').click()
            .iframe().find('.primary').click();
    });

    it('Make a payment with Permata Bank VA', () => {
        cy.get('iframe#snap-midtrans')
            .iframe().find('a[href="#/bank-transfer"]').click()
            .iframe().find('a[href="#/bank-transfer/permata-va"]').click()
            .iframe().find('.primary').click();
    });

    it('Make a payment with BRI VA', () => {
        cy.get('iframe#snap-midtrans')
            .iframe().find('a[href="#/bank-transfer"]').click()
            .iframe().find('a[href="#/bank-transfer/bri-va"]').click()
            .iframe().find('.primary').click();
    });

    it('Make a payment with Shoopepay', () => {
        cy.get('iframe#snap-midtrans')
            .iframe().find('a[href="#/shopeepay-qris"]').click()
            .iframe().find('.primary').click();
    });

    it('Make a payment with QRIS', () => {
        cy.get('iframe#snap-midtrans')
            .iframe().find('a[href="#/other-qris"]').click()
            .iframe().find('.primary').click();
    });

    it('Make a payment with Indomaret', () => {
        cy.get('iframe#snap-midtrans')
            .iframe().find('a[href="#/indomaret"]').click()
            .iframe().find('.primary').click();
    });

    it('Make a payment with Kredivo', () => {
        cy.get('iframe#snap-midtrans')
            .iframe().find('a[href="#/kredivo"]').click()
            .iframe().find('.primary').click()
        cy.get('#phoneNumber').type('081123123123')
        cy.get('#pin').type('123456')
        cy.get('.btn').click()
        cy.get('#otp').type('1234')
        cy.get('.btn').click()
    });

    it('Make a payment with Kredivo with empty Kredivo information', () => {
        cy.get('iframe#snap-midtrans')
            .iframe().find('a[href="#/kredivo"]').click()
            .iframe().find('.primary').click();
        cy.contains('Next').click()
    });

    it('Make a payment with kredivo with empty Kredivo phone number information', () => {
        cy.get('iframe#snap-midtrans')
            .iframe().find('a[href="#/kredivo"]').click()
            .iframe().find('.primary').click();
        cy.get('#pin').type('123456')
        cy.get('.btn').click()
    });

    it('Make a payment with Kredivo with invalid Kredivo phone number information', () => {
        cy.get('iframe#snap-midtrans')
            .iframe().find('a[href="#/kredivo"]').click()
            .iframe().find('.primary').click();
        cy.get('#phoneNumber').type('EMPTY@#$')
        cy.get('#pin').type('123456')
        cy.get('.btn').click()
    });

    it('Making a payment with Kredivo with an invalid OTP code', () => {
        cy.get('iframe#snap-midtrans')
            .iframe().find('a[href="#/kredivo"]').click()
            .iframe().find('.primary').click();
        cy.get('#phoneNumber').type('081123123123')
        cy.get('#pin').type('123456')
        cy.get('.btn').click()
        cy.get('#otp').type('EMPTY#@^#')
        cy.get('.btn').click()
    });

    // it('Making a payment with Brimo', () => {
    //     cy.get('iframe#snap-midtrans')
    //         .iframe().find('a[href="#/brimo"]').click()
    //         .iframe().find('.primary').click()
    //         .wait(5000)
    //     cy.get('#inputMerchantId').type('testuser00')
    // });

    // it('Make a payment with Brimo with an invalid and inappropriate name', () => {
    //     cy.get('iframe#snap-midtrans')
    //         .iframe().find('a[href="#/brimo"]').click()
    //         .iframe().find('.primary').click();
    // });

    // it('Make a payment with Brimo with an empty name', () => {
    //     cy.get('iframe#snap-midtrans')
    //         .iframe().find('a[href="#/brimo"]').click()
    //         .iframe().find('.primary').click();
    // });

})