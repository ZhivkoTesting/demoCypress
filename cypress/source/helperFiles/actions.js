"use strict";
let actions = function () {

  this.clickButton = function (element, index) {
    if (!index) {
      index = 0;
    }
    cy.get(element, {
      timeout: 10000
    }).eq(index).click({
      timeout: 10000
    });

  };

  this.inputText = function (element, input, index) {
    if (input === undefined) {
      return;
    }
    if (!input) {
      return;
    }
    if (!index) {
      index = 0;
    }

    cy.get(element, {
      timeout: 10000
    }).eq(index, {
      timeout: 10000
    }).clear({
      timeout: 10000
    });

    cy.get(element, {
      timeout: 10000
    }).eq(index, {
      timeout: 10000
    }).type(input);

  };
  this.inputTextEnter = function (element, input, index) {
    if (input === undefined) {
      return;
    }
    if (!input) {
      return;
    }
    if (!index) {
      index = 0;
    }

    cy.get(element, {
      timeout: 10000
    }).eq(index, {
      timeout: 10000
    }).clear({
      timeout: 10000
    });

    cy.get(element, {
      timeout: 10000
    }).eq(index, {
      timeout: 10000
    }).type(input).type('{enter}');

  };

};

module.exports = new actions();