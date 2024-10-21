const saladMenu = {
    caesarSalad: {
        name: "Caesar Salad",
        price: 8.99,
        ingredients: [
            "Romaine lettuce", 
            "croutons", 
            "Parmesan cheese", 
            "Caesar dressing", 
            "grilled chicken"
        ],
        preparationTemperature: "Chicken grilled to 165°F (74°C)",
        weight: "300g"
    },
    greekSalad: {
        name: "Greek Salad",
        price: 7.49,
        ingredients: [
            "Romaine lettuce", 
            "tomatoes", 
            "cucumbers", 
            "red onions", 
            "Kalamata olives", 
            "feta cheese", 
            "olive oil"
        ],
        preparationTemperature: "Served cold",
        weight: "250g"
    },
    capreseSalad: {
        name: "Caprese Salad",
        price: 9.29,
        ingredients: [
            "Fresh mozzarella", 
            "tomatoes", 
            "basil", 
            "olive oil", 
            "balsamic glaze"
        ],
        preparationTemperature: "Served at room temperature",
        weight: "220g"
    },
    cobbSalad: {
        name: "Cobb Salad",
        price: 10.99,
        ingredients: [
            "Romaine lettuce", 
            "grilled chicken", 
            "avocado", 
            "bacon", 
            "hard-boiled eggs", 
            "blue cheese", 
            "tomatoes", 
            "ranch dressing"
        ],
        preparationTemperature: "Chicken grilled to 165°F (74°C), bacon cooked to 160°F (71°C)",
        weight: "350g"
    },
    spinachStrawberrySalad: {
        name: "Spinach and Strawberry Salad",
        price: 8.49,
        ingredients: [
            "Baby spinach", 
            "fresh strawberries", 
            "goat cheese", 
            "walnuts", 
            "balsamic vinaigrette"
        ],
        preparationTemperature: "Served cold",
        weight: "230g"
    },
    quinoaSalad: {
        name: "Quinoa Salad",
        price: 9.79,
        ingredients: [
            "Quinoa", 
            "cherry tomatoes", 
            "cucumbers", 
            "red onions", 
            "feta cheese", 
            "olive oil", 
            "lemon juice"
        ],
        preparationTemperature: "Quinoa cooked to 212°F (100°C), served cold",
        weight: "270g"
    },
    asianChickenSalad: {
        name: "Asian Chicken Salad",
        price: 9.99,
        ingredients: [
            "Grilled chicken", 
            "Napa cabbage", 
            "carrots", 
            "edamame", 
            "sesame seeds", 
            "wonton strips", 
            "sesame ginger dressing"
        ],
        preparationTemperature: "Chicken grilled to 165°F (74°C)",
        weight: "320g"
    },
    waldorfSalad: {
        name: "Waldorf Salad",
        price: 7.99,
        ingredients: [
            "Apples", 
            "grapes", 
            "celery", 
            "walnuts", 
            "lettuce", 
            "mayonnaise"
        ],
        preparationTemperature: "Served cold",
        weight: "240g"
    },
    beetrootGoatCheeseSalad: {
        name: "Beetroot and Goat Cheese Salad",
        price: 9.49,
        ingredients: [
            "Roasted beets", 
            "goat cheese", 
            "arugula", 
            "walnuts", 
            "olive oil", 
            "balsamic vinegar"
        ],
        preparationTemperature: "Beets roasted at 400°F (200°C), served cold",
        weight: "280g"
    },
    avocadoShrimpSalad: {
        name: "Avocado and Shrimp Salad",
        price: 11.99,
        ingredients: [
            "Avocado", 
            "shrimp", 
            "cherry tomatoes", 
            "red onions", 
            "cilantro", 
            "lime juice", 
            "olive oil"
        ],
        preparationTemperature: "Shrimp cooked to 145°F (63°C)",
        weight: "300g"
    }
};


const getVegetarianSalads = (saladMenu) => {
    const meatIngredients = ["chicken", "bacon", "shrimp"];
    const vegetarianSalads = [];
    for (let saladKey in saladMenu) {
        const hasMeat = saladMenu[saladKey].ingredients.some(ingredient => meatIngredients.some(meat => ingredient.toLowerCase().includes(meat))); 
        if (!hasMeat) {
            vegetarianSalads.push(saladKey);
        }
    }

    return vegetarianSalads
}
const vegetarianSalads = getVegetarianSalads(saladMenu);
// console.log(vegetarianSalads)

// console.log('jhdfnivhn')
const a = document.querySelector('#menu')
console.log(a);
// a.innerHTML = 'hjkvgc'

const menuContainer = document.getElementById("menu");
const rightSide = document.querySelector('.rightSide');

const nameSalad = document.querySelector('#name');
const priceSalad = document.querySelector('#price');
const ingredientsSalad = document.querySelector('#ingredients');
const weightSalad = document.querySelector('#weight');
console.log(nameSalad)
console.log(priceSalad)
console.log(weightSalad)

console.log(ingredientsSalad)


const conclusionMenu = (a) => {
    // console.log(saladMenu[a]);
  
    // rightSide.textContent = `${saladMenu[a].name}, weight:${saladMenu[a].weight}, ${saladMenu[a].price}$`;
    let ingradientSalad ='';
    for (let saladKey in saladMenu[a].ingredients) {
        ingradientSalad += `<li><a href="">${saladMenu[a].ingredients[saladKey]}</a></li>`;
     }
    nameSalad.textContent = saladMenu[a].name;
    priceSalad.textContent = saladMenu[a].price;
    weightSalad.textContent = saladMenu[a].weight;
    // ingredientsSalad.textContent = saladMenu[a].ingredients.join(', ')
   
    ingredientsSalad.innerHTML = ingradientSalad;
}

for (let saladKey in saladMenu) {
    // console.log(saladKey)
    const listItem = document.createElement("div");
    listItem.classList.add("my-class");

      listItem.textContent = `${saladMenu[saladKey].name}`;
    menuContainer.appendChild(listItem);
    // menuContainer.addEventListener("click", () => { alert('ok') })
    listItem.addEventListener("click", () => { conclusionMenu(saladKey) })
//       
}
// const bodyEl = document.querySelector('body')
// bodyEl.addEventListener("click", () => { alert('ok') })

// document.body.innerHTML = "<div>menu</div>";
