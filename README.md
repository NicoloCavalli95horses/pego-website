# Pegorer STA - Web Application Guidelines

This document outlines the common guidelines and best practices to be followed while developing a Vue.js application.

## Table of Contents

- [Project Setup](#project-setup)
- [Folder Structure](#folder-structure)
- [Naming Conventions](#naming-conventions)
- [Code Formatting](#code-formatting)
- [Vue Components](#vue-components)
- [State Management](#state-management)
- [API Calls](#api-calls)
- [Testing](#testing)
- [Linting](#linting)
- [Deployment](#deployment)

## Project Setup

- Use the Vue CLI to create a new project, as it provides a standard project structure and a set of default configurations.
- Use a consistent version of Vue.js across the project.
- Keep the project dependencies up-to-date.
- Use a package manager like npm or Yarn to manage dependencies.

## Folder Structure

Use a well-organized folder structure to make the code easy to navigate and maintain. Below is an example of a recommended folder structure:

```
├── public
│   ├── index.html
├── src
│   ├── assets
│   ├── components
│   ├── router
│   ├── services
│   ├── store
│   ├── utils
│   ├── views
│   ├── App.vue
│   └── main.js
├── tests
└── README.md
```

- The `public` folder contains the HTML file, images, and other static assets that are served to the client as-is.
- The `src` folder contains the application source code.
- The `components` folder contains all reusable Vue components.
- The `views` folder contains the page-level components.
- The `router` folder contains the Vue Router configuration.
- The `store` folder contains Vuex store modules.
- The `utils` folder contains utility functions and reusable modules.
- The `services` folder contains the code to make API calls.
- The `tests` folder contains the test cases for the application.

## Naming Conventions

Use consistent naming conventions throughout the project. Below are some recommended naming conventions:

- Use PascalCase for component names, e.g., `MyComponent.vue`.
- Use camelCase for variable and function names, e.g., `myVariable` and `myFunction()`.
- Use kebab-case for file names, e.g., `my-component.vue`.
- Use uppercase for constants, e.g., `MY_CONSTANT`.
- Use lowercase for route paths, e.g., `/home`.

## Code Formatting

Use a consistent code formatting style to make the code easy to read and maintain. Below are some recommended code formatting rules:

- Use two spaces for indentation.
- Use single quotes for string literals.
- Use semicolons at the end of statements.
- Put braces on the same line as the statement.
- Use arrow functions instead of function expressions.

## Vue Components

Below are some guidelines to follow while creating Vue components:

- Keep the component logic and markup separate.
- Use props to pass data between components.
- Use events to communicate between child and parent components.
- Use slots to provide a flexible API for the component.
- Use the `v-bind` and `v-on` directives to bind data and events to the component.
- Use computed properties to derive data from the component props or state.

## State Management

Use Pinia for state management in larger applications. Below are some guidelines to follow while using Pinia:

- Keep the state normalized, i.e., store the data in a flat structure with relationships defined by IDs.
- Use actions to make asynchronous API calls and commit mutations to update the state.
- Use mutations to update the state and keep them synchronous.
- Use getters

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Cypress E2E

```sh
npx cypress open
```

### Cypress E2E (headless)

```sh
npx cypress run
```
