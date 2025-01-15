import { users } from "../fixtures/constant/user";
import login from "../utils/pages/login";
import product from "../utils/pages/product";

describe("Task 1", () => {
  const standardUser = users["Standard User"];
  const lockedOutUser = users["Locked Out User"];
  const wrongUsername = users["Wrong Username"];
  const wrongPassword = users["Wrong Password"];

  it("Should be able to login and logout", () => {
    cy.login(standardUser);
    cy.url().should("have.text", "https://www.saucedemo.com/inventory.html");
    product.productTitle.should("be.visible");
    cy.logout();
  });

  it("Should not be able to login using locked out user", () => {
    cy.login(lockedOutUser);
    login.lockedOutErrorMessage.should("be.visible");
  });

  it("Should not be able to login using wrong username", () => {
    cy.login(wrongUsername);
    login.wrongCredsMessage.should("be.visible");
  });

  it("Should not be able to login using wrong password", () => {
    cy.login(wrongPassword);
    login.wrongCredsMessage.should("be.visible");
  });
});
