"use strict";
const actions = require("../helperFiles/actions.js");

let pageObjects = function () {
    this.newTaskCreator = function (newTask) {
        let elNewTaskName = ("input.new-todo")
        actions.inputTextEnter(elNewTaskName, newTask.name)
    }

};

module.exports = new pageObjects();