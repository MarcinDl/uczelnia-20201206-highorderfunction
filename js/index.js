/////////// MAP ///////////

const numbersMap = [2,3,4, 9, 16, 25]

const newNumbersMap = numbersMap.map(Math.sqrt);

console.log("numbersMap", numbersMap)
console.log("newNumbersMap", newNumbersMap)

const newNumbersMap_II = numbersMap.map(addingOneMap)

function addingOneMap(item, index, arr) {
    console.log(arr[index])
    return item * 10;
}

console.log("newNumbersMap_II",newNumbersMap_II);


/////////// FOR EACH ///////////

const numbersForEach = [1, 2, 3, 4, 9, 16, 25];

function addingOneForEach(item, index, arr) {
    console.log(item + 1)
}

numbersForEach.forEach(addingOneForEach);

console.log("numbersForEach", numbersForEach);

/////////// FILTER ///////////

const numbersFilter = [1, 2, 5, 7, 8, 9, 5, 23, 32, 54, 55, 76, 234, 453];

// const newNumbersFilter = numbersFilter.filter(morethentwenty);

// function morethentwenty(element, index, arr) {
//     return element > 20;
// }

// funkcja strzałkowa - sposób 1 

// morethentwenty = (element, index, arr) => element > 20
// const newNumbersFilter = numbersFilter.filter(morethentwenty);

// funkcja strzałkowa - sposób 2
const newNumbersFilter = numbersFilter.filter( elem => elem > 20)

console.log("numbersFilter",numbersFilter)
console.log("newNumbersFilter",newNumbersFilter)