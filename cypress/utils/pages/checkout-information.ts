class CheckoutInformation {
  get checkoutInformationTitle() {
    return cy.get("[data-test='title']").contains("Checkout: Your Information");
  }

  get firstNamePlaceholder() {
    return cy.get("[data-test='firstName']");
  }

  get lastNamePlaceholder() {
    return cy.get("[data-test='lastName']");
  }

  get postalCodePlaceholder() {
    return cy.get("[data-test='postalCode']");
  }

  get continueButton() {
    return cy.get("[data-test='continue']");
  }

  fillCheckoutData(firstName: string, lastName: string, postalCode: string) {
    this.firstNamePlaceholder.type(firstName);
    this.lastNamePlaceholder.type(lastName);
    this.postalCodePlaceholder.type(postalCode);
  }
}

export default new CheckoutInformation();
