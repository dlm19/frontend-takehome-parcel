import { renderGem, renderHeader } from "./utils"

export async function getGems(searchValue) {
  try {
    const url = `http://localhost:3000/api/v1/search.json?query=${searchValue}`
    const response = await fetch(url);
    const json = await response.json();
    renderResults(json)
    return json;
  } catch (error) {
    console.log(error);
  }
}

function renderResults(results) {
  const container = document.getElementById("container");

  if (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
    container.firstChild.innerText = "Results:"
  } else {
    renderHeader("Results:")
  }

  const resultsContainer = document.createElement("div");
  resultsContainer.setAttribute("id", "results-container");
  container.appendChild(resultsContainer);

  if (results.length === 0) {
    const resultsMessage = document.createElement("p");
    resultsMessage.innerText = "No results! Try searching again";

    resultsContainer.append(resultsMessage);
    return;
  }

  results.forEach(result => {
    let resultDiv = renderGem(result);
    resultsContainer.appendChild(resultDiv);
  })
}
