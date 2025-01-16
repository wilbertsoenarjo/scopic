class YourCart {
  get yourCartTitle() {
    return cy.get("[data-test='title']").contains("Your Cart");
  }

  get productName() {
    return cy.get("[data-test='inventory-item-name']");
  }

  get checkoutButton() {
    return cy.get("[data-test='checkout']");
  }

  /**
   * Retrieves all product names from the product list.
   *
   * This function iterates over each product in the product list, extracts the product name
   * using the `productName` element, and returns an array containing the names of all products.
   * It is useful for validating the list of products displayed on the checkout page or in the cart.
   *
   * @returns {Cypress.Chainable}
   *   Returns a Cypress chainable object that resolves to an array of product names.
   */
  checkoutItemName() {
    const itemNames = [];

    this.productName.each((element) => {
      cy.wrap(element)
        .invoke("text")
        .then((text) => {
          itemNames.push(text);
        });
    });
    return cy.wrap(itemNames);
  }
}

export default new YourCart();
