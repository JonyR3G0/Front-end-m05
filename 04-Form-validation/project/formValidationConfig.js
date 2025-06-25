// This file contains the configuration for form validation, coded by @J0n4s4n.

// I'm thinking that one implementation could be to use the constructor and reading the DOM, with the prupose of creating the formValidationConfig object dynamically.
// Maybe creating generic implementations in the constructor, like email, text, phone, etc. and asigning the rules to each field, reading the properties of the field and assigning the rules based on the type of field.
// But, I see that it could be dangerous, because it could be too generic and not specific enough for the form validation rules that I want to implement, so, for this exercise, I will create a configuration object that will be used to validate the form fields specifically.

const nameField = document.getElementById("name"); 
const emailField = document.getElementById("email");
const phoneNumberField = document.getElementById("phoneNumber");
const interestCheckboxes = document.querySelectorAll("input[name='interests']");
const preferredScheduleFieldRadios = document.querySelectorAll("input[name='preferredSchedule']");
const eventDateField = document.getElementById("eventDate");
const preferredTimeField = document.getElementById("preferredTime");
const idFileField = document.getElementById("idFile");

 export const formValidationConfig = [
    {
      //? It should capture a DOM element directly or call a variable prevuiously defined?
      field: nameField,
      rules: {
        required: true,
        notEmpty: true,
        regEx: true,
      },
    },

  ];