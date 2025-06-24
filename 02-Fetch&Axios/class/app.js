// // fetch("https://jsonplaceholder.typicode.com/users")
// //     .then(respuesta => {
// //         if (!respuesta.ok) {
// //             throw new Error(`Error HTTP Status: ${respuesta.status}`)
// //         }
// //         return respuesta.json()
// //     })
// //     .then(data => console.log(data))
// //     .catch(error => console.error("El error es: ", error))

// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(respuesta => {
//         if (!respuesta.ok) {
//             throw new Error(`Error HTTP Status: ${respuesta.status}`)
//         }
//         return respuesta.json()})
//     .then(data => console.log(data))
//     .catch(error => console.error("El error es: ", error))

// Axios!
// Axios es una biblioteca para manejar solicitudes HTTP, de manera avanzada y personalizado.

axios.get('https://jsonplaceholder.typicode.com/users')
    .then(respuesta => {console.log(respuesta.data)})
    .catch(error => {
        console.log(`Error ${error}`)
    })

// Axios GET con aync
async function funPure() {
    try {
        const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(respuesta.data)
    } catch (error) {
        console.log(`Error ${error}`)
    }
}

funPure()

// peticion POST con AXIOS

axios.post('https://jsonplaceholder.typicode.com/users', {
    nom: 'admin',
    corr:'k@k' })
.then(res => {console.log(res.data)})
.catch(error => {
    console.log(`Error ${error}`)
})