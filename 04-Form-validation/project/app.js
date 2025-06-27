// This file is part of the Form Validation project coded by @J0n4s4n

const formValidationConfig = "./formValidationConfig.js";
const formValidationKeys = [];

document.addEventListener("DOMContentLoaded", () => {
  /**
   * Event handler that validates the form field when its value changes.
   * It retrieves the validation rules for the field, checks if the value is required
   * and/or matches a regular expression, and then renders the validation status on the UI.
   * TODO: find a way to validate the chekboxes & radios
   * @param {Event} event The event object triggered by the form field change.
   */
  const formFieldValidator = (event) => {
    // debugger
    const formField = event.target;
    let errorStatus = false;
    const rules = getRules(formField.id);

    if (!rules) {
      console.error("failed to retrieve rules");
      alert("Fatal error on form validation");
      return;
    }

    if (rules.required === true) {
      console.log("requiered Rule called");
      authRequiered(formField.value)
        ? console.log("autenticacion de requiered exitosa")
        : (errorStatus = true);
    }
    if (rules.regEx !== null && errorStatus !== false) {
      console.log("regex Rule called");
      authRegEx(rules.regEx, formField.value)
        ? console.log("autenticacion de regex exitosa")
        : (errorStatus = true);
    }

    renderValidationStatus(formField.id, errorStatus, rules.errorMessage);
  };

  /**
   * This function retrieves the validation rules for a given form field ID from the `formValidationKeys` array.
   *
   * @param {string} fieldId The ID of the form field for which to retrieve the rules.
   * @returns {object | null} The rules object for the specified field, or `null` if not found.
   */
  const getRules = (fieldId) => {
    for (const element of formValidationKeys[0]) {
      if (element.field.id === fieldId) {
        return element.rules;
      }
    }

    // In case of not findig coincidences, return null
    return null;
  };

  const authRequiered = (content) => {
    //TODO 1. Autentica (revisa si esta vacio o lleno de espacios)
    // 2. retorna true o false
    //quiero que el boton submit no este activado y mostrar el error de mensaje
  };
  const authRegEx = (regEx, content) => {
    //TODO 1. Autentica (revisa si el content cumple con el regex)
    // 2. retorna true o false
    //quiero que el boton submit no este activado y mostrar el error de mensaje
  };

  const renderValidationStatus = (elementId, errorStatus, errorMessage) => {
    //TODO 1. capturar el elemento
    //2,revisamos el status si status OK pintamos verde else Rojo +-
    //3. if errormensaje no es null, lo pintamos en un modal
    console.log(errorStatus);
  };

  const formHandlerSucces = (event) => {
    //TODO: It should be a function that handles the form submission success, it should prevent the default form submission behavior
    // Prevent the default form submission behavior
    event.preventDefault();
  };

  /**
   * This function is called when the DOM is fully loaded. It will dynamically import the formValidationConfig module and iterate over its fields to add event listeners for input changes. It will also add an event listener for the form submission event.
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
  
  
  /**
   * This asynchronous function initializes the form validation process.
   * It first checks for the existence of the form element. If found, it loads the form validation configuration,
   * adds event listeners to each form field for real-time validation, and sets up a submit event listener for the form.
   *
   * @async
   * @returns {void} 
   */
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
      field.field.addEventListener("change", formFieldValidator);
    }
    // Submit event
    form.addEventListener("submit", formHandlerSucces);
  };

  inicializeForm();
});
