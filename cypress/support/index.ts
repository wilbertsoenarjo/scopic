import { User } from "../fixtures/interfaces/user.interface";

declare global {
  namespace Cypress {
    interface Chainable {
      visitSauceDemo(): void;
      login(user: User): void;
      logout(): void;
    }
  }
}
