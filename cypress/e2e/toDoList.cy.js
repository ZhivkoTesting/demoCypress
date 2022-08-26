"use strict";
let data = require("../source/testData/data.js");
let pageObjects = require("../source/pageObjects/pageObjects.js")
let assertions = require("../source/helperFiles/assertions.js")

describe('Demo ToDo List', () => {
  before(() => {
    cy.visit('https://todomvc.com/examples/angularjs/')
  });

  afterEach(() => {
    cy.screenshot()
  });

  it("Shall create new tasks", function () {
    for (let newTask of data.tasks) {
      pageObjects.newTaskCreator(newTask)
    }
  });

  it("Shall validate the number of created tasks", function () {
    assertions.valNuberTasks(data.tasks.length)
  });

  it("Shall mark tasks as compleated", function () {
    for (let newTask of data.tasks) {
      pageObjects.doneSelector(newTask)
    }
  });

  it("Shall delete task", function () {
    for (let newTask of data.tasks) {
      pageObjects.deleteTask(newTask)
    }
  });

  it("Shall validate the deleted task", function () {
    for (let newTask of data.tasks) {
      if (newTask.toBeDeleted) {
        assertions.valDeletedTask(newTask)
      }
    }
  });

  it("Shall delete the compleated tasks", function () {
    pageObjects.deleteCompleated()
    assertions.valCompleatedDeleated()
  });

});