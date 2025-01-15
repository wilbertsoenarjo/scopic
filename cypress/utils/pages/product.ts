class ProductPage {
  get productTitle() {
    return cy.get("[data-test='title']").contains("Products");
  }
}

export default new ProductPage();
