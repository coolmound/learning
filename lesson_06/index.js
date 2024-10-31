const random = [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0]
console.log (random.filter(element => element === 1).length)


const sum = (n) => {
    let num = [0,1];
    for (i = 2; i <= n; i++){
        let indexNum = num[i - 1] + num[i - 2];
        num.push(indexNum)
    }
    console.log(num)
    return num.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    }

    console.log (sum(5))