"use strict";
let data = require("../source/testData/data.js");
let pageObjects = require("../source/pageObjects/pageObjects.js")

describe('Demo ToDo List', () => {
  before(() => {
    cy.visit('https://todomvc.com/examples/angularjs/')
  });

  afterEach(() => {
    cy.screenshot()
  });

  it("Shall create new tasks", function () {
    pageObjects.newTaskCreator("aaaa")
  });

});