document.getElementById("add-btn").addEventListener("click", () => {
  addRecord();
});
document.getElementById("update-btn").addEventListener("click", () => {
  upDate(currentRecordId);
});
const parentList = document.getElementById("parent-list");

const title = document.querySelector(`#title`);
const body = document.querySelector(`#body`);
const idea = document.querySelector(`#idea`);

let currentRecordId;

const urlInsert = "http://127.0.0.1:5000/insert";
const urlData = "http://127.0.0.1:5000/data";
const urlDelete = "http://127.0.0.1:5000/delete";
const urlUpdate = "http://127.0.0.1:5000/update";

const addRecord = () => {
  fetch(
    `${urlInsert}/?title=${title.value}&body=${body.value}&idea=${idea.value}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      title.value = "";
      body.value = "";
      idea.value = "";

      getElements();
      return true;
    })
    .catch((error) => console.error("Fetch error:", error));
};

const upDate = (id) => {
  fetch(
    `${urlUpdate}/?id=${id}&title=${title.value}&body=${body.value}&idea=${idea.value}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      getElements();
      return true;
    })
    .catch((error) => console.error("Fetch error:", error));
};

const removeRecord = (_id) => {
  fetch(`${urlDelete}/?_id=${_id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      getElements();
      return true;
    })
    .catch((error) => console.error("Fetch error:", error));
  renderElements();
};
// const convertData = (arg) => {
//   if (typeof arg === "string") {
//     return JSON.parse(arg);
//   } else if (typeof arg === "object" && arg !== null) {
//     return JSON.stringify(arg);
//   }
// };

const getElements = () => {
  fetch(urlData)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      parentList.innerHTML = "";
      renderElements(data);

      return true;
    })
    .catch((error) => console.error("Fetch error:", error));
};

const renderCallBack = (el) => {
  const li = document.createElement("li");
  const buttonContainer = document.createElement("div");
  const deleteButton = document.createElement("button");
  const upButton = document.createElement("button");
  const downButton = document.createElement("button");
  li.addEventListener("click", () => {
    currentRecordId = el._id;
    title.value = el.title;
    body.value = el.body;
    idea.value = el.idea;
  });
  deleteButton.textContent = "delete";
  deleteButton.onclick = () => {
    removeRecord(el._id);
  };
  buttonContainer.appendChild(deleteButton);

  // upButton.textContent = "up";
  // upButton.onclick = () => {
  //   moveUp(el.key);
  // };
  // buttonContainer.appendChild(upButton);

  // downButton.textContent = "down";
  // downButton.onclick = () => {
  //   moveDown(el.key);
  // };
  // buttonContainer.appendChild(downButton);

  li.textContent = `${el.title}---${el.body}--- ${el.idea}`;

  li.appendChild(buttonContainer);
  parentList.appendChild(li);
};

const renderElements = (data) => {
  data.map(renderCallBack);
};

// const moveUp = (arg) => {
//   const y = myArray.findIndex((el) => el[0] === arg);
//   [myArray[y], myArray[y - 1]] = [myArray[y - 1], myArray[y]];
//   renderElements(true);
// };

// const moveDown = (arg) => {};

getElements();
