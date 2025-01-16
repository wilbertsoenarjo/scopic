class CheckoutOverview {
  get checkoutOverviewTitle() {
    return cy.get("[data-test='title']").contains("Checkout: Overview");
  }

  get productName() {
    return cy.get("[data-test='inventory-item-name']");
  }

  get paymentInformation() {
    return cy.get("[data-test='payment-info-label']");
  }

  get shippingInformation() {
    return cy.get("[data-test='shipping-info-label']");
  }

  get priceTotal() {
    return cy.get("[data-test='total-info-label']");
  }

  get itemTotal() {
    return cy.get("[data-test='subtotal-label']");
  }

  get taxTotal() {
    return cy.get("[data-test='tax-label']");
  }

  get grandTotal() {
    return cy.get("[data-test='total-label']");
  }

  get finishButton() {
    return cy.get("[data-test='finish']");
  }

  verifyCheckoutDetailInformation() {
    this.paymentInformation.should("be.visible");
    this.shippingInformation.should("be.visible");
    this.priceTotal.should("be.visible");
    this.itemTotal.should("be.visible");
    this.taxTotal.should("be.visible");
    this.grandTotal.should("be.visible");
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

export default new CheckoutOverview();
