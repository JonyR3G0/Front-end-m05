let mesasDisponibles = 5; // Número de mesas disponibles para reservar

/**
 * Simula la verificación de disponibilidad de mesas.
 *
 * @param {number} mesasSolicitadas debe ser un número entero que representa la cantidad de mesas solicitadas por el cliente.
 * @throws {Error} Si el número de mesas solicitadas es menor o igual a 0.
 * @throws {Error} Si el número de mesas solicitadas es mayor que el número de mesas disponibles.
 * @throws {Error} Si el número de mesas solicitadas no es un número entero.
 * @returns {Promise<boolean>} Una promesa que se resuelve con true si hay suficientes mesas disponibles, o false si no.
 * @description Esta función simula un retraso de 2 segundos para verificar la disponibilidad de mesas. Si hay suficientes mesas disponibles, se actualiza el número de mesas disponibles y se resuelve la promesa con true. Si no hay suficientes mesas, se muestra un mensaje de error y se resuelve la promesa con false.
 */
function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof mesasSolicitadas !== "number")
        return reject(
          new Error("El número de mesas solicitadas debe ser un número entero.")
        );
      if (!Number.isInteger(mesasSolicitadas))
        return reject(
          new Error("El número de mesas solicitadas debe ser un número entero.")
        );
      if (mesasSolicitadas > mesasDisponibles) {
        console.log(
          `No hay suficientes mesas disponibles. Solicitadas: ${mesasSolicitadas}, Disponibles: ${mesasDisponibles}`
        );
        return reject(new Error("No hay suficientes mesas disponibles."));
      }
      if (mesasSolicitadas <= 0)
        return reject(new Error("No puede solicitar 0 mesas."));
      //!FIX: las mesas disponibles de deben actualizar hasta que se confirme la reserva via el mail
      mesasDisponibles -= mesasSolicitadas; // Actualiza el número de mesas disponibles
      resolve(true); // Resuelve la promesa si hay suficientes mesas
    }, 2000); // Simula un retraso en la verificación (2 segundos)
  });
}

/**
 * Simula el envío de un correo de confirmación de reserva.
 *
 * @param {string} nombreCliente El nombre del cliente que realiza la reserva.
 * @param {number} mesasSolicitadas El número de mesas solicitadas por el cliente.
 * @returns {Promise<void>} Una promesa que se resuelve si el envío es exitoso, o se rechaza si hay un error.
 * @description Esta función simula un retraso de 1.5 segundos para enviar un correo de confirmación. Si la simulación marca un error, se rechaza la promesa con un mensaje de error. Simula un ratio de error del 20% (1 de cada 5 intentos falla) para simular problemas al enviar el correo.
 * @throws {Error} Si ocurre un error al enviar la confirmación de reserva.
 */
function enviarConfirmacionReserva(nombreCliente, mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    const probabilidadError = Math.floor(Math.random() * (10 + 1)); // Genera un número aleatorio entre 0 y 10
    setTimeout(() => {
      if (probabilidadError > 2) {
        console.log(`
          +=================================================================================+
          Reserva confirmada para ${nombreCliente}. Mesas solicitadas: ${mesasSolicitadas}.
          +=================================================================================+
          `); // Mensaje de éxito
        console.log(`Mesas disponibles restantes: ${mesasDisponibles}.`); // Muestra las mesas restantes
      } else {
        reject(new Error("📛Hubo un error al enviar la confirmación de reserva via email.📛")); // Rechaza la promesa si la simulación marca un error de email
      }
    }, 1500); // Simula el envío de un correo (1.5 segundos)
  });
}

/**
 * Maneja el proceso de reserva de mesas.
 *
 * @param {string} nombreCliente El nombre del cliente que realiza la reserva.
 * @param {number} mesasSolicitadas El número de mesas solicitadas por el cliente.
 * @returns {Promise<void>} Una promesa que se resuelve si la reserva es exitosa, o se rechaza si hay un error.
 * @description Esta función verifica la disponibilidad de mesas y envía una confirmación de reserva si hay suficientes mesas disponibles. Si ocurre un error en cualquier parte del proceso, se captura y muestra en la consola.
 */
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    console.log("===================> Verificando disponibilidad de mesas... <===================");
    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas); // Llama a la función de verificaciónr
    if (disponibilidad === true) {
      await enviarConfirmacionReserva(nombreCliente, mesasSolicitadas); // Llama a la función de envío de confirmación
    }
  } catch (error) {
    console.log("Error:", error); // Captura y muestra cualquier error que ocurra durante el proceso
  }
}

// Llamadas de prueba
hacerReserva("Juan Pérez", 'uno'); // Intenta hacer una reserva, pero con un valor no numérico
hacerReserva("Juan Pérez", 0.4); // Intenta hacer una reserva, pero con un valor decimal
hacerReserva("Juan Pérez", 0); // Intenta hacer una reserva, pero con 0 mesas
hacerReserva("Juan Pérez", 100); // Intenta hacer una reserva para 100 mesas
hacerReserva("Juan Pérez", 2); // Intenta hacer una reserva para 2 personas
hacerReserva("Natalia Tovar", 3); // Intenta hacer una reserva para 3 personas

