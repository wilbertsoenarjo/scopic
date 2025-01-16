class Filter {
  /**
   * Selects a sorting option from the product filter dropdown.
   *
   * This function interacts with the product sort container dropdown and selects the specified
   * sorting option for the product list. The options available are:
   * - "Name (A to Z)"
   * - "Name (Z to A)"
   * - "Price (low to high)"
   * - "Price (high to low)"
   *
   * @param {("Name (A to Z)" | "Name (Z to A)" | "Price (low to high)" | "Price (high to low)")} option
   *   The sorting option to select from the dropdown.
   *
   * @returns {Cypress.Chainable}
   *   Returns the Cypress chainable object for further actions or assertions.
   */
  chooseFilter(
    option:
      | "Name (A to Z)"
      | "Name (Z to A)"
      | "Price (low to high)"
      | "Price (high to low)"
  ) {
    return cy.get("[data-test='product-sort-container']").select(option);
  }
}

export default new Filter();
