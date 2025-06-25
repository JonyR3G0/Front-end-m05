// This file contains the configuration for form validation, coded by @J0n4s4n.

// I'm thinking that one implementation could be to use the constructor and reading the DOM, with the prupose of creating the formValidationConfig object dynamically.
// Maybe creating generic implementations in the constructor, like email, text, phone, etc. and asigning the rules to each field, reading the properties of the field and assigning the rules based on the type of field.
// But, I see that it could be dangerous, because it could be too generic and not specific enough for the form validation rules that I want to implement, so, for this exercise, I will create a configuration object that will be used to validate the form fields specifically.

const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const phoneNumberField = document.getElementById("phoneNumber");
// const interestCheckboxes = document.querySelectorAll("input[name='interests']");
// const preferredScheduleFieldRadios = document.querySelectorAll(
//   "input[name='preferredSchedule']"
// );
const eventDateField = document.getElementById("eventDate");
const preferredTimeField = document.getElementById("preferredTime");
const idFileField = document.getElementById("idFile");

export const formValidationConfig = [
  {
    field: nameField,
    rules: {
      required: true,
      regEx: null,
      errorMessage: "Please enter your name. It should not be empty.",
    },
  },
  {
    field: emailField,
    rules: {
      required: true,
      regEx: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Basic email validation regex
      errorMessage:
        "Please enter a valid email address. It should contain '@' and a domain.",
    },
  },
  {
    field: phoneNumberField,
    rules: {
      required: true,
      regEx: /^\d{10}$/, // Assuming a 10-digit phone number
      errorMessage:
        "Please enter a valid phone number. It should be 10 digits long.",
    },
  },
//   {
//     field: interestCheckboxes,
//     rules: {
//       required: false,
//       regEx: null, // No regex for checkboxes, just check if at least one is checked
//       errorMessage: null,
//     },
//   },
//   {
//     field: preferredScheduleFieldRadios,
//     rules: {
//       required: false,
//       regEx: null,
//       errorMessage: null,
//     },
//   },
  {
    field: eventDateField,
    rules: {
        required: true,
        regEx: null,
        errorMessage: "Please, select a date"
    }
  },{
    field: preferredTimeField,
    rules:{
        required: true,
        regEx: null,
        errorMessage: "Please, select an hour for the event"
    }
  },{
    field: idFileField,
    rules: {
        required: null,
        regEx: null,
        errorMessage: null
    }
  }
];
