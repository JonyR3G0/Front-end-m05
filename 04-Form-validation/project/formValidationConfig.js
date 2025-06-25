  export const formValidationConfig = [
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