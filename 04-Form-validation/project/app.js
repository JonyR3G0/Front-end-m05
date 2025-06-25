// Form Validation Script
// Integrating SRP DRY, and early exit principles

document.addEventListener("DOMContentLoaded", () => {
  // Capture form elements from the DOM
  const form = document.getElementById("register");
  const buttonSubmit = document.getElementById("registerButton");
  const emailValue = document.getElementById("email").value;
  const phoneNumberValue = document.getElementById("phoneNumber").value;
  const interestsCheckBoxes = document.querySelectorAll(
    'input[name="interests"]:checked'
  );
  const timeCheckRadios = document.querySelector(
    'input[name="horario"]:checked'
  );
  const eventDateValue = document.getElementById("eventDate").value;
  const preferredTimeValue = document.getElementById("preferredTime").value;

  function formValidation(event) {
      event.preventDefault();
      alertMessage("Registro exitoso. ¡Gracias por registrarte!");
      resetForm();
      return true;
    }
    
const formChangeActualization = (event) => {
        // TODO Validate form fields
    const nameValue = document.getElementById("name").value;
    console.log(!nameValue);
    if(nameValue) { buttonSubmit.dissabled = true;}
    else {buttonSubmit.disabled = false};
    console.log(nameValue);
    // Validaciones básicas
    // if (!nombre || !correo || !telefono || intereses.length === 0 || !horario) {
    //   alert("Por favor, completa todos los campos obligatorios.");
    // }
    //   return;
  };

  const alertMessage = (message) => {
    const alert = document.createElement("div");
    alert.className = "alert";
    alert.textContent = message;
    document.body.appendChild(alert);
    setTimeout(() => {
      alert.remove();
    }, 3000);
  };

  const emailValidation = (email) => {};

  const nameValidation = (name) => {};

  const resetForm = () => {
    form.reset();
  };

  // Attach event listeners
  // ? I was formValidation() instead of formValidation
  // ? This is a problem because it invokes the function immediately instead of passing it as a callback
  // ? The correct way is to pass the function reference without parentheses
  form.addEventListener("change", formChangeActualization);
  form.addEventListener("submit", formValidation);
});
