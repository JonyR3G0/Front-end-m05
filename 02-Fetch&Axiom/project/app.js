// Selection of DOM elements
const fetchBtn = document.getElementById("fetch-btn");
const axiosBtn = document.getElementById("axios-btn");
const dataContainer = document.getElementById("data-container");

const baseUrl = "https://rickandmortyapi.com/api/character";

// Event listener for DOMContentLoaded to ensure the DOM is fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", () => {
  /**
   * This function fetches data from the Rick and Morty API using the Fetch API.
   *It calls the API endpoint and retrieves a list of characters.
   * If the request is successful, it processes the response and renders the characters, calling the `renderCharacters` function.
   * @async
   * @returns {Promise<void>}
   */
  const getFetchData = async () => {
    try {
      const apiResponse = await fetch(baseUrl);
      if (!apiResponse.ok) {
        throw new Error("Error en la solicitud", apiResponse.status);
      }
      const data = await apiResponse.json();
      renderCharacters(data.results);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  
  /**
   * This function fetches data from the Rick and Morty API using Axios.
   * It calls the API endpoint and retrieves a list of characters.
   * If the request is successful, it processes the response and renders the characters, calling the `renderCharacters` function.
   * @async
   * @returns {Promise<void>} 
   */
  const getAxiosData = async () => {
    axios
      .get(baseUrl)
      .then((response) => {
        const data = response.data;
        console.log(data);
        renderCharacters(data.results);
      })
      .catch((error) => {
        console.error("Error:", error);
        dataContainer.textContent = "Hubo un error al obtener los datos.";
      });
  };

  fetchBtn.addEventListener("click", getFetchData);

  axiosBtn.addEventListener("click", getAxiosData);

  /**
   * This function renders the characters in the data container.
   * It creates a new div for each character and populates it with the character's details.
   * It's not that complex, but it does involve creating HTML elements dynamically.
   *
   * @param {Object} characters
   */
  function renderCharacters(characters) {
    dataContainer.innerHTML = "";
    characters.forEach((character) => {
      const characterElement = document.createElement("div");
      characterElement.className = "card";
      characterElement.innerHTML = `
      <h3>${character.name}</h3>
      <p>Species: ${character.species}</p>
      <p>Gender: ${character.gender}</p>
      <p>Status: ${character.status}</p>
      <p>Origin: ${character.origin.name}</p>
      <p>Ubication: ${character.location.name}</p>
      <img src="${character.image}" alt="${character.name}">
    `;
      dataContainer.appendChild(characterElement);
    });
  }
});
