"use strict";

let elNameLabel = ("label.ng-binding")
let elCompleatedClass = "li.completed"
let assertions = function () {
    this.valNuberTasks = function (count) {
        cy.get('ul.todo-list li').should('have.length', count)
    }
    this.valDeletedTask = function (task) {
        cy.get(elNameLabel).contains(task.name).should('not.exist')
    }
    this.valCompleatedDeleated = function () {
        cy.get(elCompleatedClass).should('not.exist')
    }
};
module.exports = new assertions();