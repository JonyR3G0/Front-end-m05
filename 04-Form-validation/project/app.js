// This file is part of the Form Validation project coded by @J0n4s4n

const formValidationConfig = "./formValidationConfig.js";
const formValidationKeys = [];

document.addEventListener("DOMContentLoaded", () => {
  let errorStatus = false;

  const formFieldValidator = (formField) => {
    const rules = getRules(formField.id);

    // EJEMPLO DE ESTRUCTURA DEL OBJETO RULES
    // {
    //   required: true,
    //   regEx: null,
    //   errorMessage: "Please enter your name. It should not be empty.",
    // }

    if (rules.required === true) {
      authRequiered(formField.innerHTML)
        ? console.log("autenticacion de requiered exitosa")
        : (errorStatus = true);
    }
    if (rules.regEx !== null && errorStatus !== true) {
      authRegEx(rules.regEx, formField.innerHTML)
        ? console.log("autenticacion de regex exitosa")
        : (errorStatus = true);
    }

    renderValidationStatus(formField.id, errorStatus, rules.errorMessage);
  };

  const getRules = fieldId => {
    //TODO iterar sobre el config file, para buscar una coincidencia de las keys con el id
    // retornar un objeto con las llaves del objeto que coincida para autenticar.
  }

  const authRequiered = content => {
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
  };

  const formHandlerSucces = event => {
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
      field.field.addEventListener("change", formFieldValidator);
    }

    form.addEventListener("submit", formHandlerSucces);
  };

  inicializeForm();
});
