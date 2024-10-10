//ООП
function someName() {
    return 1
}
const someObj = {
    prop_1: true,
    prop_2: someName,
    prop_3: () => { return 1 }
}
// console.log(someObj.prop_2())
// console.log(someObj)
// console.log(someObj.prop_1.valueOf())



class Animals {
    constructor(voice, type) {
        this.voiceOfAnimals = voice;
        this.prop_1 = 1;
        if (type === 'dog') {
          this.skin = 'black'  
        }
    }
    firstMethod() {
        return `This animals ${this.voiceOfAnimals}`
    }
}
const birt = new Animals('chirik-chirik')
const dog = new Animals('gav-gav', 'dog')
// console.log(birt.firstMethod())
// console.log(dog.skin)




class Houses {
    constructor(floors, windows, roof) {
        this.floors = floors;
        this.windows = windows;
        this.roof = roof;
        switch (floors) {
            case 1:
                this.description = 'one-flor house';
                break;
            case 2:
                this.description = 'two-flor house';
                break;
            case 3:
                this.description = 'three-flor house';
                break;
            case 4:
                throw new Error('уккщк')
        }
    }


}

const oneFloorBuilding = new Houses(1, 3, 'flat')

// console.log(oneFloorBuilding)
const myFunc = (acum, num) => { return acum + num }
const someArrow = [1, 3, 5, 9]
const sum = someArrow.reduce(myFunc, 0)
console.log(sum)


// console.log(someArrow.length)
// someArrow.push(5)
// console.log(someArrow)
// const wrongBuilding = new Houses(4, 3, 'flat')
// console.log(wrongBuilding)
