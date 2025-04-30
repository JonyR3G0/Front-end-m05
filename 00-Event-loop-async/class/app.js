// Async uses ->

//3. Async Await
async function obtain() {
    const something = await something.json()
}

// https://jsonplaceholder.typicode.com/
// https://rickandmortyapi.com/

//4. Probando HTTP y postman

fetch('https://rickandmortyapi.com/api/character/?page=19')
    .then(response => response.json())
    .then(data => console.log(data))