// const coffee = {
//     arabika: {
//         color: null,
//         temperature: 90,
//         taste: 'sweet',
//         availability: true,
//     },
//     rabusta: {
//         color: null,
//         temperature: 80,
//         taste: 'bitter',
//         availability: true,
//     },
//     three_in_one: {
//         color: null,
//         temperature: 70,
//         taste: 'shit',
//         availability: true,
//     },
//     nescafe: {
//         color: null,
//         temperature: 60,
//         taste: 'sour',
//         availability: false,
//     }
    
// }
// // console.log(coffee.nescafe)
// const res = Object.entries(coffee).filter((el) => {
//     if (el[1].temperature < 80) {
//         return el;
//     }
//     // console.log(el)
// })
// console.log(res)
//     // .find(
// // (el) => { console.log(el) })
    



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
        const hasMeat = saladMenu[saladKey].ingredients.some((ingredient) => meatIngredients.some(meat => ingredient.toLowerCase().includes(meat))); 

        if (!hasMeat) {
            vegetarianSalads.push(saladKey);
        }
    }

    return vegetarianSalads
}
const vegetarianSalads = getVegetarianSalads(saladMenu);
console.log(vegetarianSalads)