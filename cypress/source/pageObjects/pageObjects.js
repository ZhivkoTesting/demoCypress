"use strict";
const actions = require("../helperFiles/actions.js");

let pageObjects = function () {
    this.newTaskCreator = function (newTaskName) {
        let elNewTaskName = ("input.new-todo.ng-pristine.ng-untouched.ng-valid")
        actions.inputTextEnter(elNewTaskName, newTaskName)
    }

};

module.exports = new pageObjects();