# Automation Testing with Cypress Using TypeScript

## Introduction 

This project is a test automation framework built using Cypress and Typescript. This repositories consists of 2 tests which is E2E automation and API automation. 

### E2E Automation

E2E automation is built using Cypress and Typescript. It has 2 file, named first and second task following the task given. The approach used here is Cypress Page Object Model (POM) and Test Driven Development (TDD) with helpers complete with docstring to help reviewer understand context of the helpers.

### API Automation 

API automation is built using Cypress and Typescript. It has 2 file, named first and second task following the task given. The approach used here is to reach the goal of the test case, with additional assertion to make sure that each test case is verified. There is 2 type of assertion that I implemented, first is the general assertion which will assert response status, deck id and success field. The second type of assertion, is specific assertion for each test case. For example on test case *Sort the deck*, I added assertion to make sure that the deck is really sorted.

### Installation and Local Run

1. Clone this repository
```
git clone https://github.com/wilbertsoenarjo/scopic.git
 ```
2. Navigate to the project directory
```
cd <project_directory>
 ```
3. Install dependencies
```
npm install
 ```
4. Access Cypress Test Runner of E2E or API Automation using script on terminal
```
npm run cy:run_e2e 
npm run cy:run_api
 ```

### Project Structure
```
├── cypress
│   ├── api               # API test folder (api.cy.ts format)
│   ├── e2e               # E2E test folder (cy.ts format)
│   ├── configs           # Configuration for tests
│   ├── fixtures          # Data storing folder
│       ├── constant.ts   # Contains user data
│       ├── interfaces.ts # Contains user interfaces
│   ├── utils             # Utility folder
│      ├── helpers.ts     # Contains global helpers
│       ├── pages.ts      # Contains POM classes
│   ├── support           # Cypress support folder
│       ├── commands.ts   # Contains custom Cypress commands
│       ├── index.ts      # Contains global configurations for custom commands
│       ├── e2e.ts        # Contains global overrides
│   ├── tsconfig.json     # TypeScript configuration
├── README.md             # README
├── node_modules          # Contains node_modules
├── package-lock.json     # Dependencies and scripts
├── package.json          # Dependencies and scripts
```