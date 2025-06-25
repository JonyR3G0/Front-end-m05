// This file is part of the Form Validation project coded by @J0n4s4n
// I decided to use a modular approach to keep the code organized and maintainable.
// As I'm learning pattern design, I will implement a "Configuration-Driven Development" (think its called) as far as I know.
// The goal is to create a form validation system that can be easily extended and configured.
// Yes, I did deleted the previous code to start fresh with a new approach.

document.addEventListener("DOMContentLoaded", () => {
  //TODO: It should be an object array with the following structure: Field, and Rules
  const formValidationConfig = [
    {
      //? It should capture a DOM element directly or call a variable prevuiously defined?
      field: document.getElementById("name"),
      rules: {
        required: true,
        notEmpty: true,
        regEx: true,
      },
    },
  ];

  //TODO: It should be a function that validates ONE field based on the rules defined in the formValidationConfig
  const formFieldValidator = (formField) => {
    console.log("Field loaded:", formField.field.name);
  };

  //TODO: It should be a function that handles the form submission but it should be agnostic to the form structure, it should iterate over the form fields and validate them based on the rules defined in the formValidationConfig, using formFieldValidator
  //! It should work in real time, (on input change) and on form submission
  const formHandler = (event) => {};

  //TODO: It should be a function that handles the form submission success, it should prevent the default form submission behavior
  const formHandlerSucces = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
  };

  const inicializeForm = () => {
    // ? Early exit if the form element is not found
    if (!document.getElementById("register-form")) {
      console.error("Form element not found");
      return;
    }
    const form = document.getElementById("register-form");
    // Iterate over the formValidationConfig to add event listeners to each field
    for (const field of formValidationConfig) {
      // Add event listener for input change
      console.log("Adding event listener to field:", field.field.name);
      field.field.addEventListener("input", (event) => {
        formFieldValidator(field);
      });
    }
    // Add event listener for form submission
    form.addEventListener("submit", formHandlerSucces);
  };

  inicializeForm();
});
