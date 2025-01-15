class LoginPage {
  get usernamePlaceholder() {
    return cy.get("[id='user-name']");
  }

  get passwordPlaceholder() {
    return cy.get("[id='password']");
  }

  get loginButton() {
    return cy.get("[id='login-button']");
  }

  get loginTitle() {
    return cy.get("div.login_logo");
  }

  get lockedOutErrorMessage() {
    return cy
      .get("[data-test='error']")
      .contains("Epic sadface: Sorry, this user has been locked out.");
  }

  get wrongCredsMessage() {
    return cy
      .get("[data-test='error']")
      .contains(
        "Epic sadface: Username and password do not match any user in this service"
      );
  }
}

export default new LoginPage();
