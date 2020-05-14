let numArr = [1, 3 , 5,2,1,2, 4]
let targetArr = []
console.log(2, numArr)
numArr.forEach(item => {
    if(item >= 4) {
        return false
    }
    targetArr.push(item * 2)
})
console.info(7, targetArr)