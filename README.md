# Guard Rails Automation Framework

Guard Rails Assignemnt Suite is a set of guidelines or rules used for creating and designing test cases for Juice Shop application. The framework is comprised of a combination of industry practices and modern tools that are designed to help add tests more efficiently.

The framework includes guidelines to coding standards, BDD approach that drive the entire framework, design patterns, test-data handling methods, page object classes, processes for storing test results, and custom utility functions on how to access external resources.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Technology Stack

- Cypress for Backend and Frontend Automation Testing
- NodeJS
- Javascript
- NPM as Build Tool
- Cucumber BDD as development approach
- Cucumber Preprocessor as Test Runner
- VS Code

## Framework Layers mapping

1. The Utilities & Resources Layer (L1): common folder for step definitions, support,fixtures,environments , cypress.json and plugins
2. The Pages / Microservices Layer (L2): pages and step definitions
3. The Test Suite Layer (L3): feature files

## Running the tests

On your local machine, you can run your tests using the Visual Studio Code
For building the project follow the step written below : 
Clone the project from the repository 
git clone this repo
npm install
For executing backend  tests: npm run tagTest -- --env fileConfig="juice-shop",TAGS=" @back-end-test "
For executing the front end tests : npm run tagTest -- --env fileConfig="juice-shop",TAGS=" @front-end-test"

### Break down into end to end tests

The project contains two folders inside the integration that contains all the feature file:

1. The backend-automation folder contains all the feature files and step defintions for api level tests.

2. The frontend-automation folder contains all the feature files and step defintions for ui level tests.

### Coding Standards Quick Checklist

1. Use Intention Revealing & Searchable Names
2. Always start your Class Name with a Capital letter
3. Always start your Method Name with a verb / verb phrase and camelCase
4. Objects / Instances names should always be in lowercase
5. Use Hungarian notation for variable names
6. Pick One Word per Concept
7. Don’t Pun
8. For step definitions classes: use e.g. **back-end-juice-shop-step-definition.ts**
9. Your feature file must always " e.g. **back-end-juice-shop.feature**

## Git Branching Model

- Create new branch per feature/test 
- Commit changes often and try to describe them well
- After finishing feature or test create a Pull Request
- Share it with team members for review
- If changes are needed, the author of PR will apply them
- Merge the PR to master



## Authors

- Muhammad Azmaar Jamil - Designed and developed Guard Rails Automation Framework
