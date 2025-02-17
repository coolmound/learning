const addRecord = () => {
  const title = document.querySelector(`#title`).value;
  const body = document.querySelector(`#body`).value;
  const idea = document.querySelector(`#idea`).value;
  localStorage.setItem(
    title,
    convertData({ body: body, idea: idea, index: localStorage.length })
  );

  renderElements();
};
const removeRecord = (_id) => {
  renderElements();
};
const convertData = (arg) => {
  // console.log(typeof arg);
  // debugger;
  if (typeof arg === "string") {
    return JSON.parse(arg);
  } else if (typeof arg === "object" && arg !== null) {
    return JSON.stringify(arg);
  }
};
// console.log(convertData('{"result":true, "count":42}'));
// console.log(convertData({ petz: 1, decl: 2, kukusya: 3 }));

const parentList = document.getElementById("parent-list");
let myArray = [];

const renderElements = (array) => {
  parentList.innerHTML = "";
  if (!array) {
    myArray.length = 0;
    for (let i = 0; i < localStorage.length; i++) {
      // console.log(localStorage.getItem(localStorage.key(i)));
      const itemData = localStorage.getItem(localStorage.key(i));
      const itemDataObj = convertData(itemData);
      // console.log(itemDataObj);
      myArray.push({
        key: itemDataObj.index,
        title: localStorage.key(i),
        body: itemDataObj.body,
        idea: itemDataObj.idea,
        // localStorage.key(i),
        // localStorage.getItem(localStorage.key(i)),
      });
    }
  }

  const renderCallBack = (el) => {
    const li = document.createElement("li");
    const buttonContainer = document.createElement("div");
    const deleteButton = document.createElement("button");
    const upButton = document.createElement("button");
    const downButton = document.createElement("button");

    console.log(el);

    deleteButton.textContent = "delete";
    deleteButton.onclick = () => {
      removeRecord(el.title);
    };
    buttonContainer.appendChild(deleteButton);

    upButton.textContent = "up";
    upButton.onclick = () => {
      moveUp(el.key);
    };
    buttonContainer.appendChild(upButton);

    downButton.textContent = "down";
    downButton.onclick = () => {
      moveDown(el.key);
    };
    buttonContainer.appendChild(downButton);
    // const objectData = convertData(el[1]);
    // // console.log(el[1]);

    li.textContent = `${el.key} ${el.title}---${el.body}--- ${el.idea}`;

    li.appendChild(buttonContainer);
    parentList.appendChild(li);
  };
  const sortCallback = (a, b) => a.key - b.key;

  myArray.sort(sortCallback).map(renderCallBack);
};

const moveUp = (arg) => {
  const y = myArray.findIndex((el) => el[0] === arg);
  // console.log(y);
  [myArray[y], myArray[y - 1]] = [myArray[y - 1], myArray[y]];
  renderElements(true);
};

const moveDown = (arg) => {};

renderElements();
//рудд
