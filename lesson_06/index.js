// CyclicRotation
function solution(A, K) {
    for (i = 0; i <K; i++){
        const lastEl = A.pop();
        A.unshift(lastEl)
        
    }
    console.log(A)
}

solution([1, 2, 3, 4], 2)

// OddOccurrencesInArray

function solution2(A) {
    for (i = 0; i < A.length; i++){
        if (A[i] !== A[i + 2]) {
            console.log(A[i+2]);
            break
        }
    }
    
}
solution2([2, 3, 2, 3, 5, 3, 2, 3, 2]);







const array1 = [0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1];
const array2 = [1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1];
const random = (array1, array2) => {
    let newArray = array2.reverse();
    for (i = 0; i <= array1.length; i++) {
        if (array1[i] === newArray[i] && array1[i] === 1) {
            // console.log(newArray[i])
            // console.log(i)
        //    console.log newArray.indexOf[i]. 
           
         }
    }
      
}
// console.log (random.filter(element => element === 1).length)

random(array1, array2)

const sum = (n) => {
    let num = [0,1];
    for (i = 2; i <= n; i++){
        let indexNum = num[i - 1] + num[i - 2];
        num.push(indexNum)
    }
    
    // console.log(num[i - 1])
    // console.log (num.slice(0, -1).join('-'))
    return num.slice(0, -1).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    
    }

// console.log(sum(1000))