const api = "https://isro.vercel.app/api/centres";
const tableContainer = document.getElementById("table");
const searchInput = document.getElementById("input");

async function fetchData() {
  try {
    const response = await fetch(api);
    const data = await response.json();
    return data.centres;
  } catch (error) {
    console.log("Error fetching data:", error);
    throw error;
  }
}

async function populateTable(centres) {
  try {
    tableContainer.innerHTML = "";
    centres.forEach((centre) => {
      const tableContent = document.createElement("div");
      tableContent.className = "cardContent";

      const card3 = document.createElement("div");
      card3.className = "card card3";
      const card2 = document.createElement("div");
      card2.className = "card card2";
      const card1 = document.createElement("div");
      card1.className = "card";

      const center = document.createElement("h3");
      center.textContent = "Center";
      const centerName = document.createElement("h3");
      centerName.className = "data";
      centerName.textContent = `${centre.name}`;

      const city2 = document.createElement("h3");
      city2.textContent = "City";
      const city = document.createElement("h3");
      centerName.className = "data";
      city.textContent = `${centre.Place}`;

      const state2 = document.createElement("h3");
      state2.textContent = "State";
      const state = document.createElement("h3");
      centerName.className = "data";
      state.textContent = `${centre.State}`;
      card1.appendChild(center);
      card1.appendChild(centerName);
      card2.appendChild(city2);
      card2.appendChild(city);
      card3.appendChild(state2);
      card3.appendChild(state);
      tableContent.appendChild(card1);
      tableContent.appendChild(card2);
      tableContent.appendChild(card3);
      tableContainer.appendChild(tableContent);
    });
  } catch (error) {
    console.log("Error populating Table:", error);
  }
}

// Fetch data and populate table when the page loads
fetchData()
  .then((centres) => populateTable(centres))
  .catch((error) => console.log("Error:", error));

// Filtering

function filteronbasisofcity(){
  searchInput.addEventListener("input", async () => {
    const searchTerm = searchInput.value.toLowerCase();
    const centres = await fetchData();
    const filteredCentres = centres.filter(
      (centre) =>
        centre.Place.toLowerCase().includes(searchTerm) 
    );
    populateTable(filteredCentres);
  });
}
function filteronbasisofstate(){
  searchInput.addEventListener("input", async () => {
    const searchTerm = searchInput.value.toLowerCase();
    const centres = await fetchData();
    const filteredCentres = centres.filter(
      (centre) =>
        centre.State.toLowerCase().includes(searchTerm)
    );
    populateTable(filteredCentres);
  });
}
function filterbasedonname(){
  searchInput.addEventListener("input", async () => {
    const searchTerm = searchInput.value.toLowerCase();
    const centres = await fetchData();
    const filteredCentres = centres.filter(
      (centre) =>
        centre.name.toLowerCase().includes(searchTerm)
    );
    populateTable(filteredCentres);
  });
}
