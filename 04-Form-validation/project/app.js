// This file is part of the Form Validation project coded by @J0n4s4n
// I decided to use a modular approach to keep the code organized and maintainable.
// As I'm learning pattern design, I will implement a "Configuration-Driven Development" (think its called) as far as I know.
// The goal is to create a form validation system that can be easily extended and configured.
// Yes, I did deleted the previous code to start fresh with a new approach.

const formValidationConfig = "./formValidationConfig.js";

const formValidationKeys = [];

document.addEventListener("DOMContentLoaded", () => {
  const formFieldValidator = (formField) => {
    const actualTarget = formField.target.id;
    console.log(actualTarget);
    for (const element of formValidationKeys[0]) {
      element.field.name === actualTarget
        ? console.log("bingo")
        : console.log("no bingo");
    }
  };

  const formHandlerSucces = (event) => {
    //TODO: It should be a function that handles the form submission success, it should prevent the default form submission behavior
    // Prevent the default form submission behavior
    event.preventDefault();
  };

  /**
   * @description This function is called when the DOM is fully loaded. It will dynamically import the formValidationConfig module and iterate over its fields to add event listeners for input changes. It will also add an event listener for the form submission event.
   *
   * @returns {void}
   * @throws {Error} If the form element is not found in the DOM.
   * @throws {Error} If there is an error loading the formValidationConfig module.
   */
  const loadFormValidationConfig = async () => {
    // Load the formValidationConfig module
    try {
      const data = await import(formValidationConfig);
      console.log(data);
      return data.formValidationConfig;
    } catch {
      (error) => {
        console.error("Error loading form validation config:", error);
        return;
      };
    }
  };

  const inicializeForm = async () => {
    // ? Early exit if the form element is not found
    if (!document.getElementById("register-form")) {
      console.error("Form element not found");
      return;
    }

    // Capturing the DOM elements and importing the config file
    const form = document.getElementById("register-form");
    formValidationKeys.push(await loadFormValidationConfig());
    // Creating the listeners for every element
    for (const field of formValidationKeys[0]) {
      console.log("Adding event listener to field:", field.field.name);
      field.field.addEventListener("input", formFieldValidator);
    }

    form.addEventListener("submit", formHandlerSucces);
  };

  // Fire 🐦‍🔥😎
  inicializeForm();
});
