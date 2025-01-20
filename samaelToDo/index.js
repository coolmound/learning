const addRecord = () => {
  const title = document.querySelector(`#title`).value;
  const body = document.querySelector(`#body`).value;
  localStorage.setItem(title, body);
  renderElements();
};

const removeRecord = (item) => {
  localStorage.removeItem(`${item}`);
  renderElements();
};

const parentList = document.getElementById("parent-list");
let myArray = [];

const renderElements = (array) => {
  parentList.innerHTML = "";
  if (!array) {
    myArray.length = 0;
    for (let i = 0; i < localStorage.length; i++) {
      myArray.push([
        localStorage.key(i),
        localStorage.getItem(localStorage.key(i)),
      ]);
    }
  }
  myArray.map((el) => {
    const li = document.createElement("li");
    const buttonContainer = document.createElement("div");
    const deleteButton = document.createElement("button");
    const upButton = document.createElement("button");
    const downButton = document.createElement("button");

    deleteButton.textContent = "delete";
    deleteButton.onclick = () => {
      removeRecord(el[0]);
    };
    buttonContainer.appendChild(deleteButton);

    upButton.textContent = "up";
    upButton.onclick = () => {
      moveUp(el[0]);
    };
    buttonContainer.appendChild(upButton);

    downButton.textContent = "down";
    downButton.onclick = () => {
      moveDown(el[0]);
    };
    buttonContainer.appendChild(downButton);

    li.textContent = `${el[0]} --- ${el[1]}`;
    li.appendChild(buttonContainer);
    parentList.appendChild(li);
  });
};

const moveUp = (arg) => {
  const y = myArray.findIndex((el) => el[0] === arg);
  console.log(y);
  [myArray[y], myArray[y - 1]] = [myArray[y - 1], myArray[y]];
  renderElements(true);
};

const moveDown = (arg) => {};

renderElements();
//рудд
