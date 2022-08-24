"use strict";
const actions = require("../helperFiles/actions.js");
let elNewTaskName = ("input.new-todo")
let elNameLabel = ("label.ng-binding")
let pageObjects = function () {
    this.newTaskCreator = function (newTask) {
        actions.inputTextEnter(elNewTaskName, newTask.name)
    };
    this.doneSelector = function (newTask) {
        if (newTask.toBeCompleated) {
            cy.get(elNameLabel).contains(newTask.name).siblings("input").click()
        }
    };
    this.deleteTask = function (task) {
        if (task.toBeDeleted) {
            cy.get(elNameLabel).contains(task.name).siblings("button").click({
                force: true
            }) // the button is hiden but can be clicked
        }
    };
}
module.exports = new pageObjects();