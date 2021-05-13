import 'regenerator-runtime/runtime'
import { renderSavedGems } from './saved';
import { getGems } from './search';

const inputElement = document.getElementById("gems");
const searchElement = document.getElementById("gem-search");

searchElement.onclick = () => {
  getGems(inputElement.value);
  inputElement.value = '';
}
inputElement.onkeyup = (e) => {
  if (e.code === "Enter") searchElement.click()
}

const savedGemsElement = document.getElementById("saved-gems");
savedGemsElement.onclick = () => {
  renderSavedGems();
}
