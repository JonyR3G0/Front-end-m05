// Tienda de amburguesas
// Veamos la relacion entre el tiempo de ejecucion y los procesos.
// Entender el encadenamiento de promesas (promise chaining)
// Manjeos de errores
// Finally

// In how many steps a hamburger is born?

//1. Ingredients
//2. Cook the burguer
//3. Cook the bread
//4. Put together everything
//5. Serve

let isStoreOpen = true

// Model function where everything is put together
let kitchenWork = (time, process) => {
    return new Promise((resolve, reject) => {
        if (isStoreOpen) {
            setTimeout(() => {
                resolve( process() )
            }, time);
        } else {
            reject( console.log( 'something went astronomicallyburging bad, the store is in the status ' + isStoreOpen ) )
        }
    })
}

kitchenWork(3000, () => console.log('Burguer building blocks reunited'))
// Es necesario que los then retornen para que los siguientes then funcionen
.then( () => {
    return kitchenWork(2000, () => console.log('Firing the burger to max temperature'))
} )
.then( () => {
    return kitchenWork(1000, () => console.log('Firing the bread to max temperature'))
} )
.then( () => {
    return kitchenWork(4000, () => console.log('We are puting together the borguir!'))
} )
.then( () => {
    return kitchenWork(2000, () => console.log('Seeeeerving ~~ 🍔'))
} )
.catch( () => {
    console.log('something ')
})
.finally(  () => {
    console.log('Burger status protocolus maximus ended.')
} )