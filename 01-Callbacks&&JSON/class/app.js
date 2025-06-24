// ! A. Ejemplo de uso con callbacks (sincronos)

// 1. Funcion que opera multiples numeros

// const calcular = (n1, n2, callback) => {
//     if(callback === 'sumar'){
//         return n1 + n2
//     }else if(callback === 'multiplicar'){
//         return n1*n2
//     }
// }
// console.log(calcular(1,2,'sumar'))

// 2. Funcion que opera multiples numeros CON callbacks

// const calcularCB = (n1, n2, callback) => {
//     return callback(1,2)
// }

// const sum = (a,b)=>{
//     return a+b
// }
// const mul = (a,b)=>{
//     return a*b
// }

// console.log(calcularCB(1,2,mul))
// console.log(typeof mul)

// ! B. callbacks asincronos

// Promise
// function pinky(time, msg) {
//     return new Promise((resolve) => {
//     setTimeout(() => {
//         console.log(msg);
//         resolve()
//     }, time);
//     });
// }
// pinky(1000, 'Tarea cumplida')
// .then(()=> pinky(500, '2'))
// .then(()=> pinky(500, '3'))
// .then(()=> pinky(500, '4'))

// ! C. JSON