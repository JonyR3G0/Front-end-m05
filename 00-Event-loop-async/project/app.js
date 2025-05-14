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

const orderList = document.getElementById('orderList');
const addOrderBtn = document.getElementById('addOrderBtn');

let orderId = 1; // Para identificar los pedidos
5
addOrderBtn.addEventListener('click', () => {
    const order = { id: orderId++, status: 'En Proceso' };
    addOrder(order);
    processOrder(order);
});

function addOrder(order) {
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    orderList.appendChild(listItem);
}

function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${status}`;
    }
}

async function processOrder(order) {
    // TODO: Simular la preparación del pedido usando setTimeout y Promise
    // TODO: Actualizar el estado del pedido a "Completado"
    new Promise((resolve, reject) => {
        setTimeout(() => {
            updateOrderStatus(order, 'READY')
        }, 2000);
    })
}