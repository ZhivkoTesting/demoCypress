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
    for (let newTask of data.newTasks) {
      pageObjects.newTaskCreator(newTask)
    }
  });

  it("Shall validate the number of created tasks", function () {
    assertions.valNuberTasks(data.newTasks.length)
  });
});