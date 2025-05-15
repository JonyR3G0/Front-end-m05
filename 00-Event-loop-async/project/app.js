/**
1. Configura el entorno:
1.1. Crea un archivo HTML con un botón para agregar pedidos y un contenedor para mostrar los pedidos en la interfaz.
1.2. Crea un archivo JavaScript donde desarrollarás la lógica principal.
2. Estructura del código - Define funciones que manejen:
2.1. Recepción de un nuevo pedido.
2.2. Actualización visual del estado de los pedidos.
2.3. Simulación de la preparación de pedidos.
3. Comportamiento del sistema cuando el usuario haga clic en 'Agregar Pedido':
3.1. Se generará un pedido con un identificador único.
3.2. Se mostrará en la interfaz con el estado 'En Proceso'.
3.3. Después de un tiempo aleatorio (simulando la preparación), el estado cambiará a 'Completado'.
4. Mecanismos asincrónicos:
4.1. Usa `setTimeout` para simular el tiempo de preparación de los pedidos.
4.2. Implementa **Promises** para manejar la finalización de los pedidos.
4.3. Utiliza `async/await` para actualizar el estado en tiempo real.
 */

const orderList = document.getElementById("orderList")
const addOrderBtn = document.getElementById("addOrderBtn")

//Id de orden
let orderId = 100
const listOfErrors = []

const randomPrepTime = () => {
    //Calculamos un tiempo aleatorio entre 5000 milis. y 8000 milis.
    const timeInMilis = Math.random() * 5000 + 3000
    //Retornamos el random
    return timeInMilis
}

const randomError = () => {
    //Computamos un numero aleatorio del 1 al 100, y lo redondeamos (hacia abajo)
    const probability = Math.floor(Math.random() * 100)
    //Le retornamos a la funcion, if truty es un error if falsie todo bien
    if (probability === 77) {
        return true
    } else {
        return false
    }
}

addOrderBtn.addEventListener("click", () => {
    //! Esta funcion usa regrecion al llamar a processOrder()
    //Estado inicial de cualquier orden, y sumamos 1 al id
    const order = { id: orderId++, status: "PROCESANDO ORDEN" }
    //Creamos el elemento en el DOM
    addOrder(order)
    //Procesamos la orden, la primera ronda puede durar 8 segundos (de P.O. a PREP)
    processOrder(
        order,
        (order) => {
            updateOrderStatus(order, "PREPARANDO")
        },
        randomPrepTime()
    )
        //Usamos then para que finalizada la primera promesa, usamos recursion
        .then(() => {
            time = randomPrepTime() - 4000
            return processOrder(
                order,
                (order) => {
                    updateOrderStatus(order, "SIRVIENDO")
                },
                time
            )
        })
        .then(() => {
            time = randomPrepTime() - 3000
            return processOrder(
                order,
                (order) => {
                    updateOrderStatus(order, "ENTREGA")
                },
                time
            )
        })
        .then(() => {
            time = randomPrepTime() - 3000
            return processOrder(
                order,
                (order) => {
                    updateOrderStatus(order, "PEDIDO COMPLETADO")
                },
                time
            )
        })
        .catch(() => {
            console.log(
                `Algo malio sal en la orden #${
                    listOfErrors[listOfErrors.length - 1].id
                } :/`
            )
        })
})

function addOrder(order) {
    const listItem = document.createElement("li")
    listItem.id = `order-${order.id}`
    listItem.textContent = `Pedido #${order.id}: ${order.status}`
    orderList.appendChild(listItem)
}

function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`)
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${status}`
    }
}

function processOrder(order, handleCallback, time) {
    // Esta funcion retorna una promesa
    // Order es el # de orden para que pueda actualizar el estado
    return new Promise((resolve, reject) => {
        // Para hacerlo mas interactivo, hay un error aleatorio
        // para tener un reject.
        // Esta probabilidad se ejecuta cada vez que hay un callback,
        // por lo que podria haber una cancelacion en cualquier stage
        // de preparacion
        setTimeout(() => {
            if (randomError() === true) {
                listOfErrors.push(order)
                updateOrderStatus(order, "ORDEN CANCELADA")
                reject()
            } else {
                resolve(handleCallback(order))
            }
        }, time)
    })
}
