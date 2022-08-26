"use strict";
let array = require("../fixtures/example.json")

describe('Compare keys in array of objects', () => {
  it("Shall compare the lines", function () {
    for (var i = 0; i < array.length; i++) {
      cy.wrap(array[0].line1).should('equal', array[i].line1)
    }
  });
});