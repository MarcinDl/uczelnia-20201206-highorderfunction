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

// funkcja 
// function morethentwenty(element, index, arr) {
//     return element > 20;
// }

// funkcja strzałkowa - sposób 1 

// morethentwenty = (element, index, arr) => element > 20
// const newNumbersFilter = numbersFilter.filter(morethentwenty);

// funkcja strzałkowa - sposób 2
const newNumbersFilter = numbersFilter.filter(elem => elem > 20);

console.log("numbersFilter", numbersFilter);
console.log("newNumbersFilter", newNumbersFilter);

/////////// REDUCE ///////////

const numbersReduce = [4,5,6,5];

//sposób 1
console.log(numbersReduce.reduce((total, elem) => total + elem));
console.clear();
//sposób 2
console.log(numbersReduce.reduce(sum));
const initial = 0;
function sum(initial, elem,index,arr) {
    console.log("inital", initial);
    console.log("index", index);
    console.log("arr", arr);
    return initial - elem
}
console.clear();
//////////// Zad 1 

// Utwórz funkcję, która zwraca tablicę liczb przeciwnych.

// additiveInverse([5, -7, 8, 3]) ➞ [-5, 7, -8, -3]
// additiveInverse([1, 1, 1, 1, 1]) ➞ [-1, -1, -1, -1, -1]
// additiveInverse([-5, -25, 35]) ➞ [5, 25, -35]

//sposób 1

// function additiveInverse(arr) {
//     for (let i = 0; i < arr.length; i++){
//         arr[i] = arr[i] * -1;
//     }
//     return arr
// }

// console.log(additiveInverse([5, -7, 8, 3]));

//sposób 2

// function additiveInverse(arr) {
//     return arr.map(item => -item)
// }
// console.log(additiveInverse([5, -7, 8, 3]));

//sposób 3

// additiveInverse = (arr) => arr.map(item => -item)
// console.log(additiveInverse([5, -7, 8, 3]));

// sposób 4

const numbs = [5, -7, 8, 3];

numbs.forEach(additiveInverse);

function additiveInverse(item,index,arr) {
    arr[index] = -item
}
console.log(numbs);


// zad 2
// Napisz funkcję, która dzieli tablicę na dwie podtablice: jedną ze wszystkimi parzystymi liczbami całkowitymi, a drugą ze wszystkimi nieparzystymi liczbami całkowitymi. Zwróć wynik w następującym formacie:

// [[odd], [even]]