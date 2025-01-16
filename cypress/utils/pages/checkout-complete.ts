class CheckoutComplete {
  get checkoutCompleteTitle() {
    return cy.get("[data-test='title']").contains("Checkout: Complete!");
  }

  get completeHeader() {
    return cy
      .get("[data-test='complete-header']")
      .contains("Thank you for your order!");
  }

  get completeText() {
    return cy
      .get("[data-test='complete-text']")
      .contains(
        "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
      );
  }

  get backToHomeButton() {
    return cy.get("[data-test='back-to-products']");
  }

  verifyCompleteText() {
    this.checkoutCompleteTitle.should("be.visible");
    this.completeHeader.should("be.visible");
    this.completeText.should("be.visible");
  }
}

export default new CheckoutComplete();
