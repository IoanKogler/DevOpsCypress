/// <reference types="cypress" />

const { first } = require("rxjs-compat/operator/first")

describe('my second test suite' , () => {

    it('first test of second suite', () => {
        cy.visit('/')
        cy.contains('Forms').click()//Search any text on site & click
        cy.contains('Datepicker').click()

        cy.contains('nb-card', 'Common Datepicker').find('input').click()
        cy.contains('nb-calendar-day-cell','16').click()
        cy.get('input').should('value', 'Jun 16, 2021')

        
/*
        cy.contains('nb-card', 'Common Datepicker').find('input').then( input =>  {

            cy.wrap(input).click()
            cy.get('nb-calendar-day-picker').contains('16').click()
            cy.wrap(input).invoke('prop', 'value').should('contain', 'Jun 16, 2021')

        } ) */
    })

    it('checkboxes and radio buttons', () => {
        cy.visit('/')
        cy.contains('Forms').click()//Search any text on site & click
        cy.contains('Datepicker').click()

        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
       // cy.contains('nb-card', 'nb-radio').click()

       cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then(radioButtons => {
        cy.wrap(radioButtons)
            .first()
            .check({force: true})
            .should('be.checked')

        cy.wrap(radioButtons)
            .eq(1)
            .check({force: true})

        cy.wrap(radioButtons)
            .eq(0)
            .should('not.be.checked')
        
        cy.wrap(radioButtons)
            .eq(2)
            .should('be.disabled')

       })

    })

    it.only('checkboxes2', () => {
        cy.visit('/')
        cy.contains('Modal & Overlays').click()//Search any text on site & click
        cy.contains('Toastr').click()

        cy.contains('nb-card', 'Toaster configuration').find('[type="checkbox"]').then(checkbox => {

            cy.wrap(checkbox)
                first()
                .check({force: true})
                .should('be.checked')
        }) 
        
    })
})