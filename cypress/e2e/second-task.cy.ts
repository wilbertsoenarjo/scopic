import { users } from "../fixtures/constant/user";
import login from "../utils/pages/login";

describe("Task 2", () => {
  const standardUser = users["Standard User"];

  before(() => {
    cy.visitSauceDemo();
  });

  it("Should be able checkout product", () => {
    cy.login(standardUser);
  });
});
