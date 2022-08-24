"use strict";
const { count } = require("console");
const actions = require("../helperFiles/actions.js");

let assertions = function () {
    this.valNuberTasks = function (count) {
        cy.get('ul.todo-list li').should('have.length', count)
    }

};
module.exports = new assertions();