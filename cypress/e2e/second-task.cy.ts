import { users } from "../fixtures/constant/user";
import filter from "../utils/helpers/filter";
import checkoutComplete from "../utils/pages/checkout-complete";
import checkoutInformation from "../utils/pages/checkout-information";
import checkoutOverview from "../utils/pages/checkout-overview";
import product from "../utils/pages/product";
import yourCart from "../utils/pages/your-cart";

describe("Task 2", () => {
  const standardUser = users["Standard User"];
  const itemNumber = [1, 2];

  before(() => {
    cy.visitSauceDemo();
  });

  it("Should be able to checkout product", () => {
    // Login as standard user
    cy.login(standardUser);
    cy.verifyLogin();

    // Sort product by price (high to low)
    filter.chooseFilter("Price (high to low)");

    // Add to cart the first two items
    product.checkoutItemName(itemNumber).then((itemNameCheckoutPage) => {
      product.addItemToCart(itemNumber);

      // Open cart
      product.shoppingCart.should("have.text", "2").click();
      cy.url().should("include", "https://www.saucedemo.com/cart.html");
      yourCart.yourCartTitle.should("be.visible");
      yourCart.checkoutItemName().then((itemNameYourCartPage) => {
        expect(itemNameCheckoutPage).to.deep.equal(itemNameYourCartPage);
      });

      // Proceed to checkout
      yourCart.checkoutButton.click();
      checkoutInformation.checkoutInformationTitle.should("be.visible");

      // Fill checkout data
      checkoutInformation.fillCheckoutData("Wilbert", "Only", "10000");

      // Finish checkout procedure
      checkoutInformation.continueButton.click();
      checkoutOverview.checkoutOverviewTitle.should("be.visible");
      checkoutOverview
        .checkoutItemName()
        .then((itemNameCheckoutInformationPage) => {
          expect(itemNameCheckoutPage).to.deep.equal(
            itemNameCheckoutInformationPage
          );
        });
    });
    checkoutOverview.verifyCheckoutDetailInformation();

    checkoutOverview.finishButton.click();
    checkoutComplete.verifyCompleteText();

    checkoutComplete.backToHomeButton.click();
    product.productTitle.should("be.visible");
  });
});
