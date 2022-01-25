/// <reference types="cypress" />

describe("test for my todo application", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3003/")
  })

  it("displays No item in the list by default", () => {
    cy.findByText(/No item in the list/i).should("exist")
  })

  it("can add new todo items to the page", () => {
    const newItem = "first item"

    cy.get("[data-testid=item-field]").type(`${newItem}{enter}`)

    cy.get("li")
      .should("have.length", 1)
      .first()
      .findByText("first item")
      .should("exist")

    const secondItem = "second item"

    cy.get("[data-testid=item-field]").type(`${secondItem}{enter}`)

    cy.get("li")
      .should("have.length", 2)
      .last()
      .findByText("second item")
      .should("exist")
  })

  it("can check off an item as completed", () => {
    const newItem = "first item"

    cy.get("[data-testid=item-field]").type(`${newItem}{enter}`)

    cy.contains("first item").parent().find("input[type=checkbox]").check()
    cy.contains("first item").should("have.class", "complete")
  })

  it("can delete a task in the item list", () => {
    const newItem = "first item"

    cy.get("[data-testid=item-field]").type(`${newItem}{enter}`)

    cy.contains("remove ❌").click()

    cy.contains("first item").should("not.exist")
  })
})
