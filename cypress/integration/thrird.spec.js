/// <reference types="cypress" />

describe ('TC0052 To-dos creation', () => {
    it('Opening To-Dos', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.get('.appearance-filled')
        .eq(4)
        //.parents('form') //verified test

        //cy.contains('nb-card')

    })

    /* ==== Test Created with Cypress Studio ==== */
    it('calendar', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('http://localhost:4200/');
        cy.get('a.ng-tns-c7-13 > .menu-title').click();
        cy.get('.menu-item > .ng-tns-c7-14').click();
        cy.get(':nth-child(1) > nb-calendar > nb-base-calendar.medium > nb-card > nb-card-body > .medium > nb-calendar-picker > [ng-reflect-row="Sun Oct 17 2021 00:00:00 GMT+0"] > :nth-child(5)').click();
        cy.get('[ng-reflect-row="Sun Oct 17 2021 00:00:00 GMT+0"] > .selected').should('have.text', '21');
        cy.get('nb-calendar-range > nb-base-calendar.medium > nb-card > nb-card-body > nb-calendar-pageable-navigation.ng-star-inserted > :nth-child(3) > nb-icon > svg > [data-name="Layer 2"] > g > rect').click();
        cy.get('nb-calendar-range > nb-base-calendar.medium > nb-card > nb-card-body > nb-calendar-pageable-navigation.ng-star-inserted > :nth-child(3) > nb-icon > svg > [data-name="Layer 2"] > g > rect').click();
        cy.get('nb-calendar-range > nb-base-calendar.medium > nb-card > nb-card-body > nb-calendar-pageable-navigation.ng-star-inserted > :nth-child(3) > nb-icon > svg > [data-name="Layer 2"] > g > rect').click();
        cy.get('[ng-reflect-row="Sun Jan 23 2022 00:00:00 GMT+0"] > :nth-child(4) > .day-cell').should('have.text', ' 26 ');
        /* ==== End Cypress Studio ==== */
    });
}) 
