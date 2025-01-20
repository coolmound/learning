// hello word from Samael

//hello

// addRecord ми створюємо новий запис
const addRecord = () => {
  const title = document.querySelector(`#title`).value;
  const body = document.querySelector(`#body`).value;
  localStorage.setItem(title, body);
  renderElements();
};

// removeRecord видаляємо рекрод по ключу
const removeRecord = (item) => {
  localStorage.removeItem(item);
  renderElements();
};

// це наш контейнер списка
const parentList = document.getElementById("parent-list");

const renderElements = () => {
  // тут ми чистемо контейнер для подальшого рендеру
  parentList.innerHTML = "";
  // циклом проходимось по сторажу та створюємо елементи списку
  for (let i = 0; i < localStorage.length; i++) {
    // сам елемент
    const li = document.createElement("li");
    // кнопочка видалення
    const button = document.createElement("button");
    button.textContent = "delete";
    button.onclick = () => {
      removeRecord(localStorage.key(i));
    };

    // тут ми в нашу створену лішку вписуєм її значення
    li.textContent = `${localStorage.key(i)} --- ${localStorage.getItem(
      localStorage.key(i)
    )}`;
    // причипляємо кнопку делейт, яка має кожна свою фуенкцію делейт, та з параметром угікального ключа
    li.appendChild(button);
    // вмонтовуємо в наш список нашу лішку з кнопочкой
    parentList.appendChild(li);
  }
};

// на старті кода виконуємо рендер, він очистить контейнер списку та напхає туди інфу )))))
renderElements();

// враховуй те що title є ключ, він УНІКАЛЕН в сторажі, тобто якщо ти намагається робити такий же самий то воно просто перетре твох данні
// доречі, я не запускав мікросервіс з ВС Кода, а просто відкрив файл index.html, фіг знає шо там той сервіс робить кожи шо воно ото таке не то )))
// З.І. розбирись, оформи красиво )))  головне розбирись, якщо прибрати коменти то побачиш як локанічно я прозоро все, прибреи коменти )))
