"use strict";
const actions = require("../helperFiles/actions.js");

let assertions = function () {
    this.elementColorValidator = function (element, color) {
        cy.get('div.step-elem').should('have.class', 'active')
    }

};
module.exports = new assertions();