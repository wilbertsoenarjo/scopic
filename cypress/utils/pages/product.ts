class ProductPage {
  get productTitle() {
    return cy.get("[data-test='title']").contains("Products");
  }

  get productList() {
    return cy.get("[data-test='inventory-item']");
  }

  get productName() {
    return cy.get("[data-test='inventory-item-name']");
  }

  get shoppingCart() {
    return cy.get("[data-test='shopping-cart-badge']");
  }

  get addToCartButton() {
    return cy.get("button.btn_inventory").contains("Add to cart");
  }

  get removeButton() {
    return cy.get("button.btn_inventory").contains("Remove");
  }

  /**
   * Adds specified items to the cart by clicking the 'Add to Cart' button.
   *
   * This function loops through the provided item numbers, selects the corresponding product
   * from the product list, and clicks the 'Add to Cart' button for each specified item.
   * It also verifies that the 'Remove' button becomes visible after adding the item to the cart,
   * indicating that the item is successfully added.
   *
   * @param {number[]} itemNumber
   *   An array of indices (1-based) representing the positions of the items in the product list
   *   that should be added to the cart.
   *
   * @returns {void}
   *   This function does not return a value, but it triggers actions and assertions on the page.
   */
  addItemToCart(itemNumber: number[]) {
    itemNumber.forEach((index) => {
      this.productList.eq(index - 1).within(() => {
        this.addToCartButton.click();
        this.removeButton.should("be.visible");
      });
    });
  }

  /**
   * Retrieves the names of specified items from the product list.
   *
   * This function loops through the provided item numbers, extracts the product names
   * from the product list, and returns an array of item names. It is used for checking
   * which items are in the cart or the product list at specific positions.
   *
   * @param {number[]} itemNumber
   *   An array of indices (1-based) representing the positions of the items in the product list
   *   for which the names should be retrieved.
   *
   * @returns {Cypress.Chainable}
   *   Returns a Cypress chainable object that resolves to an array of item names.
   */
  checkoutItemName(itemNumber: number[]) {
    const itemNames = [];

    itemNumber.forEach((index) => {
      this.productList.eq(index - 1).within(() => {
        this.productName.invoke("text").then((text) => {
          itemNames.push(text);
        });
      });
    });
    return cy.wrap(itemNames);
  }
}

export default new ProductPage();
