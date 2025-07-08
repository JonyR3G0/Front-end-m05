> [!IMPORTANT]
> From now on, all the docs for the `Front End Master by Dev.F series` will be in English, end eventually all the code comments 🇺🇸

# 🛰️ Advanced development in JavaScript `05`

![Banner gif pixelart, neon tech.](https://i.pinimg.com/originals/84/cc/00/84cc005b1b6afcb7a935e53eb2c0b374.gif)

## ℹ️ About

A collection of hands-on exercises crafted by [me](https://github.com/JonyR3G0), from an intensive modern JavaScript module imparted by [Dev.f](https://devf.la/). The exercises cover fundamental areas:

- **Asynchronicity:** Event Loop, Callbacks, Promises, and Async/Await.
- **API Consumption:** Using the Fetch API and Axios for endpoint interaction.
- **Development Tooling:** Introduction to the Node.js ecosystem, package management with npm, and module bundling with Vite.

## 🏫 Lessons

| Topic                         | Date       |
| :---------------------------- | :--------- |
| Event Loop and Asynchronicity | 2025-04-29 |
| Callbacks and JSON            | 2025-05-06 |
| Fetch and Axios               | 2025-05-08 |
| Promises and Async/Await      | 2025-05-13 |
| Form Handling                 | 2025-05-15 |
| Form Validation with Zod      | 2025-05-20 |
| Intro to Node.js and npm      | 2025-05-22 |
| Intro to Vite                 | =          |

## 🔨 Projects

### Project: Order Simulator

> Description: A UI construction to simulate a coffee shop's order queue. The system assigns an initial state and asynchronously updates the interface to reflect progress, from "In Process" to "Completed."
**=> Core Concepts:** ` Event Loop, setTimeout, Promises, async/await, DOM`

### Project: Library Manager

> Description: A console application to manage a book collection from a JSON file. It uses a callback scheme to simulate latency in data reading and writing, allowing operations such as searching, adding, and deleting books from the inventory.

**=> Core Concepts:** ` Callbacks, JSON, fs (Node.js), Asynchronicity`

### Project: API Consumption

> Description: A web interface that fetches and displays data from the Rick and Morty API. The project implements two data fetching methods for comparison: the browser's native Fetch API and the Axios library. The results are rendered on character cards.

**=> Core Concepts:** ` Fetch API, Axios, REST API, Promises, async/await`

### Project: Reservation System

> Description: Logic for a restaurant reservation system that manages table availability. The flow is controlled by promise chaining to check availability and subsequently send a simulated confirmation. Robust error handling is implemented for scenarios where the reservation cannot be completed.

**=> Core Concepts:** ` Promises, Promise Chaining, Error Handling, async/await`

### Project: Form Validation

> Description: A real-time form validation system, structured under a Data-Driven Design approach. The configuration of validation rules, including regular expressions, is externalized into an object to decouple logic and improve maintainability.

**=> Core Concepts:** ` DOM Events, RegExp, Data-Driven Design, UI Feedback`

### Project: Validation with Zod

> Description: Refactoring of form validation using the Zod library for data schema definition. Validation is executed upon form submission, comparing the entered data against the predefined schema and displaying errors in a structured manner.

**=> Core Concepts:** ` Schema Validation, Zod, Error Handling, Type-Safe`

### Project: Planet Explorer

> Description: An elementary Node.js script that uses a local module to obtain planet data and an external npm dependency (cowsay) to display it stylistically in the console. It serves as an introduction to the Node ecosystem, package management, and modularization.

**=> Core Concepts:** ` Node.js, npm, CommonJS Modules`

### Project: Guess the Number

> Description: A simple web game developed and served with Vite. The project demonstrates the basic setup of a modern development environment, the use of JavaScript modules (ESM), and DOM manipulation for the game's logic.

**=> Core Concepts:** ` Vite, ES Modules, DOM, Dev Server`

## ⚡ New good-practices adquired

- `Implementation of jsdocs`
- `Early exit`
- `DRY (trying my best)`
- `Data driven design (form validation project)`
