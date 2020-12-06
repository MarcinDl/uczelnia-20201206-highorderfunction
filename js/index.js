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

console.clear();
// zad 2
// Napisz funkcję, która dzieli tablicę na dwie podtablice: jedną ze wszystkimi parzystymi liczbami całkowitymi, a drugą ze wszystkimi nieparzystymi liczbami całkowitymi. Zwróć wynik w następującym formacie:

// [[odd], [even]]

//spobó 1

function evenOdd(arr) {
    let r = [[], []];
    for (let i in arr) {
        // console.log(i)
        r[arr[i]%2].push(arr[i])
    }
    return r
}
console.log(evenOdd([12,43,5,6534,534]))
//sposób 2

// function evenOdd(arr) {
//     console.log(arr)
//     let odd = [], even = [];
//     for (let item of arr) {
//         (item % 2 === 0) ? even.push(item) : odd.push(item)
//     }

//     return [odd,even]
// }

// console.log(evenOdd([12,43,5,6534,534]))

// sposób 3

// function evenOdd(arr) {
//     let even = arr.filter(x => x % 2 === 0);
//     let odd = arr.filter(x => x % 2 === 1);
//     return [odd,even]
// }

//zad 3

// Napisz funkcję, która zwraca true, jeśli istnieje co najmniej jedna liczba większa lub równa n (która to jest drugim parametrem w podanej funkcji.

// existsHigher([5, 3, 15, 22, 4], 10) ➞ true
// existsHigher([1, 2, 3, 4, 5], 8) ➞ false
// existsHigher([4, 3, 3, 3, 2, 2, 2], 4) ➞ true
// existsHigher([], 5) ➞ false

// Spróbuj rozwiązać zadanie wykorzystując metodę some: https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Array/some

// sposób 1 

// function existsHigher(arr,n) {
//     for (let r of arr) {
//         if (r >= n) {
//             return true
//         }
//     }
//     return false
// }

// console.log(existsHigher([5, 3, 15, 22, 4], 10));
// console.log(existsHigher([1, 2, 3, 4, 5], 8));
// console.log(existsHigher([4, 3, 3, 3, 2, 2, 2], 4));
// console.log(existsHigher([], 5));

//sposób 2

// function existsHigher(arr, n) {
//     return arr.filter(x => x >= n).length > 0;
// }

// console.log(existsHigher([5, 3, 15, 22, 4], 10));
// console.log(existsHigher([1, 2, 3, 4, 5], 8));
// console.log(existsHigher([4, 3, 3, 3, 2, 2, 2], 4));
// console.log(existsHigher([], 5));

//sposób 3

const existsHigher = (arr,n) => arr.some(x => x>= n)

console.log(existsHigher([5, 3, 15, 22, 4], 10));
console.log(existsHigher([1, 2, 3, 4, 5], 8));
console.log(existsHigher([4, 3, 3, 3, 2, 2, 2], 4));
console.log(existsHigher([], 5));