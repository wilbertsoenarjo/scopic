import login from "../utils/pages/login";
import { User } from "../fixtures/interfaces/user.interface";
import sidebar from "../utils/helpers/sidebar";

const envUrl = Cypress.config().baseUrl;

Cypress.Commands.add("visitSauceDemo", () => {
  cy.url().then((url) => {
    if (!url.includes(Cypress.config().baseUrl)) {
      cy.visit(Cypress.config().baseUrl);
    }
    login.loginTitle.should("have.text", "Swag Labs");
  });
});

Cypress.Commands.add("login", (user: User) => {
  cy.visitSauceDemo();
  login.usernamePlaceholder.clear();
  login.passwordPlaceholder.clear();
  login.usernamePlaceholder.type(user.username);
  login.passwordPlaceholder.type(user.password);
  login.loginButton.click();
});

Cypress.Commands.add("logout", () => {
  sidebar.accessSidebar.click();
  sidebar.sidebarMenu.should("be.visible");
  sidebar.logoutButton.click();
  cy.url().should("include", envUrl);
  login.loginTitle.should("have.text", "Swag Labs");
});
