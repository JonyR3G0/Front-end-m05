// ¿Qué hace el request handler?
// 	1. Guarda la api key
// 	2. Guarda el dominio de la api
// 	3. Hace peticiones de querry para terminos de búsqueda
// 	4. Maneja el JSON de la base de datos y extrae las biblias en español, japones e ingles
// 	5. Extrae porciones de texto (checar docu)
// 	6. Parsea los JSON
// ¿Qué retorna?
// Un objeto parseado del JSON
// Estados de error
// ¿Qué parámetros recibe?
// Status code, search querry(obj)
// 1 = Versiculo random diario
// 2 = Busqueda de versiculo

const API_KEY = "e197bf78b45694a04c49b6d58f692f31"; // Replace with your actual API key
const API_DOMAIN = "https://api.scripture.api.bible/v1/bibles"; // Replace with your actual API domain

let bibleData = []; // Array to store bible data
let bibleListChapterVerses = [];

/**
 * Fetches a list of bibles from the API and stores them in bibleData array.
 *
 * @async
 * @returns {Promise<void>} A promise that resolves when the bibles are fetched and stored.
 * @throws {Error} If there is an error fetching the bibles.
 */
const fetchBibles = async () => {
  //TODO: Search for bibles in Spanish, Japanese, and English and store them in bibleData
  try {
    const response = await fetch(API_DOMAIN, {
      headers: {
        "api-key": API_KEY,
      },
    });
    if (!response.ok) {
      throw new Error(
        `HTTP error! status: ${response.status} - ${response.statusText}`
      );
    }
    const JSONbibles = await response.json();
    console.log("Fetched Bibles:", JSONbibles.data.length);
    JSONbibles.data.forEach((bible) => {
      if (
        bible.language.name === "Spanish" ||
        bible.language.name === "English"
      ) {
        const newBible = {
          id: bible.id,
          name: bible.name,
          language: bible.language.name,
        };
        bibleData.push(newBible);
      }
    });
  } catch (error) {
    console.error("Error fetching bibles:", error);
    throw error; // Propagate the error to the caller
  }
};

await fetchBibles();
console.log("Bibles fetched and stored in bibleData.");
console.log("Bible Data:", bibleData);

const patchBibleDataBooks = async () => {
  //TODO: Parse bible data and extract the list of chapter and verses
  //! FIXME: This function is not working as expected, it needs to be implemented with mutability in mind
  try {
    const bibleId = bibleData[1].id;
    const response = await fetch(`${API_DOMAIN}/${bibleId}/books`, {
      headers: {
        "api-key": API_KEY,
      },
    });
    if (!response.ok) {
      throw new Error(
        `HTTP error! status: ${response.status} - ${response.statusText}`
      );
    }
    const JSONbooks = await response.json();
    JSONbooks.data.forEach((book) => {
      const bookObject = {
        id: book.id,
        name: book.name,
        chapters: [],
        verses: [],
      };
      bibleListChapterVerses.push(bookObject);
    });
  } catch (error) {
    console.error("Error patching bible data:", error);
    throw error; // Propagate the error to the caller
  }
};

const patchBibleDataChapters = async (actualBook) => {
  //! FIXME: This function is not working as expected, it needs to be implemented with mutability in mind
  try {
    const bibleId = bibleData[1].id;
    const response = await fetch(`${API_DOMAIN}/${bibleId}/books/${actualBook}/chapters`,{
      headers: {
        "api-key": API_KEY,
      }})
    if (!response.ok) {
      throw new Error(
        `HTTP error! status: ${response.status} - ${response.statusText}`
      );
    }
    const JSONchapters = await response.json();
    JSONchapters.data.forEach((chapter) => {
      bibleListChapterVerses.forEach(book => {if (book.id.toLowerCase() === actualBook.toLowerCase()){
        bibleListChapterVerses[0].chapters += `${chapter.number},`
      }        
      });
    });
  } catch (error) {
    console.error("Error patching bible data chapters:", error);
    throw error; // Propagate the error to the caller``) {
  }
}

// Start the process of fetching and patching bible data
await patchBibleDataBooks();
console.log('Bible data patched and stored', bibleListChapterVerses);
console.log(`with ${bibleListChapterVerses.length} books.`);

//? How exactly I need to patch the chapters for every book?
await patchBibleDataChapters('gen');
console.log('Chapters patched for book GEN:', bibleListChapterVerses);

const fetchBibleText = async (bibleId, bookId, chapter) => {
  //TODO: Fetch the text of a specific bible, book, and chapter
};

const fetchRandomVerse = async () => {
  //TODO: Fetch a random verse from the bible
  //? Should it be a random verse from the entire bible or from a specific list?
};

export {};
