const planetas = require("./planetas");
const cowsay = require("cowsay");

console.log(`
    =========================================================
    Enviando a la vaca intergaláctica a encontrar planetas...
    =========================================================
    `);
planetas.forEach((planeta) => {
  setTimeout(() => {
    console.log(
      cowsay.say({
        text: `¡Planeta ${planeta.nombre} descubierto!`,
        e: "--",
        T: "U",
      })
    );
    console.log(`Descripción: ${planeta.descripcion}`);
    console.log(`Descubierto en: ${planeta.descubiertoEn}`);
    console.log("---");
  }, 500);
});
