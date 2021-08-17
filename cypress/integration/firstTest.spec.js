/// <reference types="cypress" />

const { property } = require("cypress/types/lodash")

describe('Our first suite', () =>{

   

    it.only('first test', () => {

        cy.visit('/')
        cy.contains('Forms').click()//Search any text on site & click
        cy.contains('Form Layouts').click()
        
        //by Tag Name
        cy.get('input')

        //by ID
        cy.get('#inputEmail1')

        //by Class name
        cy.get('.input-full-width')

        //by Attribute name
        cy.get('[placeholder]')

        //by Attribute name and value
        cy.get('[placeholder="Email"]')

        //by Class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        // by Tag name AND Attribute with value
        cy.get('input[placeholder="Email"]')

        //by two different attributes
        cy.get('[placeholder="Email"][fullwidth]')

        //by tag name, Attribute with value, ID and Class name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')
        
        //The most recommended way by Cypress (own locator)
        //cy.get('[data-cy="imputEmail1"]')

    })
    it('second test', () => {

        cy.visit('/')
        cy.contains('Forms').click()//Search any text on site & click
        cy.contains('Form Layouts').click()

        cy.get('[data-cy="signInButton"]')
        
        cy.contains('Sign in')

        cy.contains('[status="warning"]','Sign in')

        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkbox').click()

        cy.contains('nb-card', 'Horizontal form').find('[type="email"]').type('Hello you hacker')

    })

    it('then and wrap methods', () => {

        cy.visit('/')
        cy.contains('Forms').click()//Search any text on site & click
        cy.contains('Form Layouts').click()

       cy.contains('nb-card', 'Using the Grid').then(firstForm => {
        const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
        const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()
        expect(emailLabelFirst).to.equal('Email')
        expect(passwordLabelFirst).to.equal('Password')

        cy.contains('nb-card', 'Basic form').then(secondForm => {
            const emailLabelSecond = secondForm.find('[for="exampleInputEmail1"]').text()
            const passwordLabelSecond = secondForm.find('[for="exampleInputPassword1"]').text()
            //  expect(emailLabelSecond).to.equal(emailLabelFirst)
            expect(passwordLabelSecond).to.equal(passwordLabelFirst)

            cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password')
    
           })

       })

       

    })
  
    it('invoke command', () => {
        cy.visit('/')
        cy.contains('Forms').click()//Search any text on site & click
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Basic form')
        .find('nb-checkbox')
        .click()
        .find('span')
        .should('have.class', 'custom-checkbox checked')
        
    })


    
    

        
  
    
}) 

