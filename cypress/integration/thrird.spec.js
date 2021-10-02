/// <reference types="cypress" />

describe ('TC0052 To-dos creation', () => {

    it('Opening To-Dos', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.get('.appearance-filled')
        .eq(4)
        //.parents('form') //verified test

        cy.contains('nb-card')

    })
}) 
