/////////// MAP ///////////

const numbersMap = [2,3,4, 9, 16, 25]

const newNumbersMap = numbersMap.map(Math.sqrt);

console.log("numbersMap", numbersMap)
console.log("newNumbersMap", newNumbersMap)

const newNumbersMap_II = numbersMap.map(addingOneMap)

function addingOneMap(item) {
    return item * 10;
}

console.log("newNumbersMap_II",newNumbersMap_II);
