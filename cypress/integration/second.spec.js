/// <reference types="cypress" />

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
})