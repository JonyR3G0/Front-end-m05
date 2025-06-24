//When importing JSON files, the import statement automatically parses the JSON file into a JavaScript object.
//This means that the imported JSON file is already in a format that can be used directly, without needing to manually parse it using `JSON.parse()`.
import * as JSONLibrary from "./library.json"  with {type: 'json'}
import fs, { write } from "fs"

//This is the array that will hold the library books
//It will be filled with the parsed JSON data
let libraryArray = []


/**
 * This function simulates a network request to parse a JSON file.
 * Since the import statement automatically parses the JSON file, this function is used to emulate a delay in processing, and parserFunction just moves the parsed JSON out of the default object.
 * Selects a random delay between 200ms and 1999ms to simulate network latency.
 *
 * @param {object} JSONLibrary 
 * @param {callback} callback 
 * @returns {Promise<void>} A promise that resolves when the JSON is parsed and the callback is executed.
 */
function JSONObjectParser(JSONLibrary, callback) {
    //Emulating time responses from 200ms - 1999ms
    const time = Math.floor(Math.random() * (2000 - 200) + 200)

    //The callback simulating network delays
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                callback(JSONLibrary, time)
                resolve()
            } catch (error) {
                reject(error)
            }
        }, time)
    })
}


/**
 * This function is called by the JSONObjectParser as a promise to handle the parsed JSON data.
 * Moves the parsed JSON data from the 'default' property of the imported JSON object to the libraryArray.
 *
 * @param {object} JSONLibrary 
 * @param {number} time 
 */
const parserFunction = (JSONLibrary, time) => {
    console.log("Hi! the response time was:", time)
    //Bc import auto. parses the JSON, the content it's enveloped in an obj 'default'
    libraryArray = JSONLibrary.default
    console.log(
        `Library patched correctly, the file contained ${libraryArray.length} books`
    )
}


/** 
 * This function writes the current state of the libraryArray to a JSON file.
 * It converts the array to a JSON string with 2 spaces for indentation.
 * It uses the fs module to write the JSON string to a file named "library.json" in the specified path.
 * If an error occurs during the write operation, it logs an error message to the console.
 * Consumes the libraryArray variable, which is expected to be filled with the parsed JSON data.
 */
const writeToJson = () => {
    //Obj -> JSON string (arr, null, 2 spaces)
    const freshJson = JSON.stringify(libraryArray, null, 2)
    //Path (same as original)
    const filePath = "01-Callbacks&&JSON/project/library.json"
    //Fs async
    fs.writeFile(filePath, freshJson, "utf-8", (err) => {
        if (err) {
            console.error("Fatal error while saving the JSON", err)
            return
        }
        console.log("The JSON has been succesfully saved")
    })
}


/**
 * This function acts as a "librarian" that can perform various tasks related to books in the library.
 * 
 * @param {string} task 
 * @param {string} searchTerm 
 * @param {object} newBook 
 */
function librarian(task, searchTerm, newBook) {
    switch (task.toLowerCase()) {
        case "find":
            findABook(searchTerm)
            break
        case "available":
            isItAvailable(searchTerm)
            break
        case "add":
            addABook(newBook)
            break
        case "destroy":
            destroyABook(searchTerm)
            break
        default:
            console.log("Unknow task")
            break
    }
}


/**
 * This function searches for a book in the libraryArray by its title.
 *
 * @param {string} searchTerm 
 */
const findABook = (searchTerm) => {
    const book = libraryArray.find(
        (b) => b.title.toLowerCase() === searchTerm.toLowerCase()
    )
    if (book) {
        console.log(`
+====================== Finding a book ============================+
| Found book '${book.title}' in position: ${
            libraryArray.findIndex(
                (book) => book.title.toLowerCase() === searchTerm.toLowerCase()
            ) + 1
        }
| Author: ${book.author}
| Genre: ${book.genre}
| Status: ${book.status}
+==================================================================+
`)
    } else {
        throw new Error("There is not a book named like that I'm afraid...")
    }
}


/**
 * This function checks if a book is available in the libraryArray by its title.
 *
 * @param {string} searchTerm 
 */
const isItAvailable = (searchTerm) => {
    const book = libraryArray.find(
        (b) => b.title.toLowerCase() === searchTerm.toLowerCase()
    )
    if (book) {
        console.log(`
+========================== Status check ==========================+
The book ${searchTerm} status is:
${book.status}
+==================================================================+
`)
    } else {
        throw new Error("Theres'nt a coincidence")
    }
}


/**
 * This function deletes a book from the libraryArray by its title.
 *
 * @param {string} searchTerm 
 */
const destroyABook = (searchTerm) => {
    //Looking for the book...
    console.log("Localizing book...")
    const indexOfBookToDestroy = libraryArray.findIndex(
        (book) => book.title.toLowerCase() === searchTerm.toLowerCase()
    )
    if (indexOfBookToDestroy === -1) {
        throw new Error("There's not a book named like that... aborting")
    } else {
        console.log(`A match! on index: ${indexOfBookToDestroy}`)
        //Rewrite ALL the library with the filtered version
        const newLibrary = libraryArray.filter((book) => {
            if (book.title.toLowerCase() !== searchTerm.toLowerCase()) {
                return book
            } else false
        })
        libraryArray = newLibrary
        console.log(`
+===================== Destroy a book ==================+
| Book succesfully d e s t r o y e d . . .
| Book name: ${searchTerm}
+=======================================================+
`)
    }
}


/**
 * This function adds a new book to the libraryArray.
 * It only adds the book in the local variable libraryArray, not in the JSON file, if you need to save it, you need to call the writeToJson function.
 *
 * @param {object} newBook 
 */
const addABook = (newBook) => {
    console.log("Looking for empty books or duplicates")
    if (newBook === undefined) {
        console.log(
            `
+!!!!!!!!!!!!!!!!!!!!!!! Adding a book !!!!!!!!!!!!!!!!!!!!!!!!!!!!+
| mjm. I think we don't need another empty book.
+!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!+
`
        )
        return
    } else if (
        libraryArray.find(
            (b) => b.title.toLowerCase() === newBook.title.toLowerCase()
        )
    ) {
        console.log(
            `
+!!!!!!!!!!!!!!!!!!!!!!! Adding a book !!!!!!!!!!!!!!!!!!!!!!!!!!!!+
| A book with the same name already exist in position: ${
                libraryArray.findIndex(
                    (book) =>
                        book.title.toLowerCase() === newBook.title.toLowerCase()
                ) + 1
            }
+!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!+
`
        )
        return
    } else {
        console.log(
            `
+======================= Adding a book ============================+
| Adding book '${newBook.title}' in position: ${libraryArray.length + 1}
| Author: ${newBook.author}
| Genre: ${newBook.genre}
| Status: ${newBook.status}
+==================================================================+
`
        )
        libraryArray.push(newBook)
    }
}

//1. Read and parse the JSON (Async)
JSONObjectParser(JSONLibrary, parserFunction).then(() => {
    console.log(
        `How to interact with the librarian? find (search a book) available (checks if the book is availiable) add (It needs to be passed as an atribute an object containing the info of the new book) destroy (for eliminating a book)`
    )
    //Find a book
    librarian("find", "the little prince")
    //Check availability
    librarian("available", "the little prince")
    //Add a new book
    //1.Create the book
    const book = {
        title: "En el blanco",
        author: "Ken Follet",
        genre: "thriller",
        status: "available",
    }
    //2.Actually creating the book
    librarian("add", undefined, book)
    //Error testing
    librarian("add", undefined, book)
    //Error testing
    librarian("add", undefined)
    const book2 = {
        title: "En el blanco",
        author: "Ken Follet",
        genre: "thriller",
        status: "available",
    }
    //Delete a book
    librarian("destroy", "en el blanco")
    //Save the JSON using FS
    writeToJson()
    console.log("yaaaaay I did it!!")
})
