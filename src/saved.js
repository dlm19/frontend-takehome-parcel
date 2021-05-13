import { renderGem, renderHeader } from "./utils";

export function renderSavedGems() {
  const container = document.getElementById("container");

  if (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
    container.firstChild.innerText = "Saved Gems:";
  } else {
    renderHeader("Saved Gems:");
  };

  const savedGemsContainer = document.createElement("div");
  savedGemsContainer.setAttribute("id", "saved-gems-container");
  container.appendChild(savedGemsContainer);

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);

    if (key !== "showIcon" && key !== "urlBlackList") {
      let savedGem = JSON.parse(localStorage.getItem(key));
      let resultDiv = renderGem(savedGem);
      savedGemsContainer.append(resultDiv);
    };
  };

  if(!savedGemsContainer.hasChildNodes()) {
    const saveGemsMessage = document.createElement("p");
    saveGemsMessage.innerText = "You have no saved gems. Search for gems and start saving your favorites";

    savedGemsContainer.append(saveGemsMessage);
  };
};
