export function renderGem(result) {
  const { name, version, info, downloads } = result;

  const div = document.createElement("div");
  div.setAttribute("class", "result");

  const nameElement = document.createElement("h4");
  nameElement.setAttribute("class", "entry-name");
  nameElement.innerText = name;
  div.appendChild(nameElement);

  const versionElement = document.createElement("p");
  versionElement.setAttribute("class", "entry-version");
  versionElement.innerText = version;
  div.appendChild(versionElement);

  const infoElement = document.createElement("p");
  infoElement.setAttribute("class", "entry-info");
  infoElement.innerText = info;
  div.appendChild(infoElement);

  const downloadElement = document.createElement("p");
  downloadElement.setAttribute("class", "entry-downloads");
  downloadElement.innerText = downloads;
  div.appendChild(downloadElement);

  const saveButton = createSaveButton(result);
  div.append(saveButton);

  return div;
};

function createSaveButton(result) {
  const name = result.name;

  const button = document.createElement("button");
  button.setAttribute("class", "save");

  const maybeSavedInLocalStorage = localStorage.getItem(name);

  if (maybeSavedInLocalStorage) {
    button.innerText = "unsave";
  } else {
    button.innerText = "save";
  };

  button.onclick = () => {
    const parent = button.parentNode;
    const storageKey = parent.firstChild.innerText;

    const checkLocalStorage = localStorage.getItem(storageKey);

    if (checkLocalStorage) {
      localStorage.removeItem(storageKey);
      button.innerText = "save";
    } else {
      localStorage.setItem(storageKey, JSON.stringify(result));
      button.innerText = "unsave";
    };

    const maybeInSavedGems = document.getElementById("saved-gems-container");

    if(maybeInSavedGems) {
      document.getElementById("saved-gems").click();
    };
  };

  return button;
};

export function renderHeader(header) {
  const container = document.getElementById("container");

  const listHeader = document.createElement("h2");
  listHeader.setAttribute("id", "list-header");
  listHeader.innerText = `${header}`;
  container.append(listHeader);
}

