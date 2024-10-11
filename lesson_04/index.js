// const treadmill_1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// const placeSprinter = (treadmill, index) => {
//     treadmill[index] = 1; 
//     return treadmill
// } 
// // console.log(placeSprinter(treadmill_1, 4))

// const newPlaceSprinter = placeSprinter(treadmill_1, 4);
const shiftToRight = (a,b) => {
    const curentPlacement = a.indexOf(1);
    a[curentPlacement] = 0;
    a[curentPlacement + b] = 1;
    return a;
}
// console.log(newPlaceSprinter.join('-'));
// console.log(shiftToRight(newPlaceSprinter, 3).join('_'))

class Treadmill {
    constructor(a) {
        this.treadmill_1 = Array(a).fill(0);
    }
       
    placeSprinter(index) {
        if (index >= 0 && index < this.treadmill_1.length) {
            this.treadmill_1[index] = 1;
        }
    }
    curentPlacement() {
        return this.treadmill_1.indexOf(1);
        

    }

    shiftToRight (steps) {
    // const curentPlacement = this.treadmill_1.indexOf(1);
    this.treadmill_1[curentPlacement()] = 0;
    this.treadmill_1[curentPlacement() + steps] = 1;
    
    }
    shiftToLeft (steps) {
    // const curentPlacement = this.treadmill_1.indexOf(1);
    this.treadmill_1[curentPlacement()] = 0;
    this.treadmill_1[curentPlacement() - steps] = 1;
    
    }
    changePosition(direction, steps) {
        let a;
        for (let i = 0; i <= steps; i++) { 
            if (direction) {
                this.treadmill_1[this.curentPlacement() + 1] = 1;
                this.treadmill_1[this.curentPlacement()] = 0;
                console.log(this.treadmill_1.join('-'))
            } else {
                a = this.curentPlacement();
                this.treadmill_1[this.curentPlacement()] = 0;
                 this.treadmill_1[a - 1] = 1;
                console.log(this.treadmill_1.join('-'))
            }
            // console.log(this.curentPlacement())
            // console.log(this.treadmill_1.join('-'))
            // console.log('_______________________________________')
            
            

            // console.log(this.treadmill_1.join('-'))
           
           
            // console.log(this.curentPlacement())
            


            // if (direction) {
            //     this.treadmill_1[this.placeSprinter() + i] = 1;
            // } else {
            //     this.treadmill_1[this.placeSprinter() - i] = 1;   
            // }
        }
    }
}


const newTreadmill = new Treadmill(50)
newTreadmill.placeSprinter(3);
newTreadmill.changePosition(true, 7);
newTreadmill.changePosition(false, 7);

// console.log(newTreadmill.treadmill_1.join('-'))
// const secondTreadmill = new Treadmill(25)
// secondTreadmill.placeSprinter(8);
// console.log(secondTreadmill.treadmill_1.join('_'))

// secondTreadmill.shiftToLeft(4);
// console.log(secondTreadmill.treadmill_1.join('-'))


