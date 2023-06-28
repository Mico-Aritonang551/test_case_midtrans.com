
describe('Checkout Product', { testIsolation: false }, () => {
  beforeEach(() => {
    cy.visit('https://demo.midtrans.com/')
    cy.url().should('include', 'midtrans.com')
  })

  it('Checkout Product With Valid Data', () => {
    cy.get('.buy').click()
    cy.get('.cart-checkout').click()
  })

  it('Checkout Product With Empty Data', () => {
    cy.get('.buy').click()
    cy.get('[data-reactid=".0.0.1.0.3.0.0.0"] > .input > input').clear()//nama
    cy.get('[data-reactid=".0.0.1.0.3.0.0.1"] > .input > input').clear()//email
    cy.get('[data-reactid=".0.0.1.0.3.0.0.2"] > .input > input').clear()//no hp
    cy.get('[data-reactid=".0.0.1.0.3.0.0.3"] > .input > input').clear()//city
    cy.get('textarea').clear()//address
    cy.get('[data-reactid=".0.0.1.0.3.0.0.5"] > .input > input').clear()//postal code
    cy.get('.cart-checkout').click()
  })

  it('Checkout without filling in the name field', () => {
    cy.get('.buy').click()
    cy.get('[data-reactid=".0.0.1.0.3.0.0.0"] > .input > input').clear()//nama
    cy.get('.cart-checkout').click()
  })

  it('Checkout without filling in the email field', () => {
    cy.get('.buy').click()
    cy.get('[data-reactid=".0.0.1.0.3.0.0.1"] > .input > input').clear()//email
    cy.get('.cart-checkout').click()
  })

  it('Checkout without filling in the phone number field', () => {
    cy.get('.buy').click()
    cy.get('[data-reactid=".0.0.1.0.3.0.0.2"] > .input > input').clear()//no hp
    cy.get('.cart-checkout').click()
  })

  it('Checkout without filling in the city name field', () => {
    cy.get('.buy').click()
    cy.get('[data-reactid=".0.0.1.0.3.0.0.3"] > .input > input').clear()//city
    cy.get('.cart-checkout').click()
  })

  it('Checkout without filling in the address field', () => {
    cy.get('.buy').click()
    cy.get('textarea').clear()//address
    cy.get('.cart-checkout').click()
  })

  it('Checkout without filling in the postal field', () => {
    cy.get('.buy').click()
    cy.get('[data-reactid=".0.0.1.0.3.0.0.5"] > .input > input').clear()//postal code
    cy.get('.cart-checkout').click()
  })

  it('Checkout with an invalid name in the name field', () => {
    cy.get('.buy').click()
    cy.get('[data-reactid=".0.0.1.0.3.0.0.0"] > .input > input').clear()//nama
      .type('$$##123')
    cy.get('.cart-checkout').click()
  })

  it('Checkout with an invalid email address', () => {
    cy.get('.buy').click()
    cy.get('[data-reactid=".0.0.1.0.3.0.0.1"] > .input > input').clear()//email
      .type('Budimail.com')
    cy.get('.cart-checkout').click()
  })

  it('Checkout with an invalid phone number', () => {
    cy.get('.buy').click()
    cy.get('[data-reactid=".0.0.1.0.3.0.0.2"] > .input > input').clear()//no hp
      .type('NN123!@#')
    cy.get('.cart-checkout').click()
  })

  it('Checkout with an invalid city name', () => {
    cy.get('.buy').click()
    cy.get('[data-reactid=".0.0.1.0.3.0.0.3"] > .input > input').clear()//city
      .type('Bikini Buttom')
    cy.get('.cart-checkout').click()
  })

  it('Checkout with an invalid address', () => {
    cy.get('.buy').click()
    cy.get('textarea').clear()//address
      .type('12345Alamat@#$')
    cy.get('.cart-checkout').click()
  })

  it('Checkout with an invalid postal code 1', () => {
    cy.get('.buy').click()
    cy.get('[data-reactid=".0.0.1.0.3.0.0.5"] > .input > input').clear()//postal code
      .type('ABCDEF')
    cy.get('.cart-checkout').click()
  })

  it('Checkout with an invalid postal code 2', () => {
    cy.get('.buy').click()
    cy.get('[data-reactid=".0.0.1.0.3.0.0.5"] > .input > input').clear()//postal code
      .type('123ABC')
    cy.get('.cart-checkout').click()
  })

  it('Checkout with an invalid postal code 3', () => {
    cy.get('.buy').click()
    cy.get('[data-reactid=".0.0.1.0.3.0.0.5"] > .input > input').clear()//postal code
      .type('$%#@ABD')
    cy.get('.cart-checkout').click()
  })
})