/** 
 * En esta ocación si voy a dejar el proyecto en español para entregar YA
 * porque ya me tomé demasiado tiempo.
 * (funciona, pero hay muchas cosas que se pueden hacer mejor)
 * Mejor entregado y funcional, que perfecto y nunca terminado.
 */


// Importamos Zod
import z from "https://cdn.jsdelivr.net/npm/zod@3.25.72/+esm"

// Esquema para validar los datos del formulario
const registerSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8).max(20),
});

document.getElementById("registerForm").addEventListener("submit", (event) => {
  event.preventDefault();

  // Capturamos los valores ingresados
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  try {
    // PISTA: Usa el método correcto de Zod para validar el esquema.
    // Parse normalito porque estamos usando un try/catch
    registerSchema.parse(formData);
    alert("¡Registro exitoso!");
  } catch (error) {
    // PISTA: Muestra los mensajes de error en la página.
    document.getElementById("errors").textContent = error.errors
      .map((e) => e.message)
      .join(". ");
  }
});
