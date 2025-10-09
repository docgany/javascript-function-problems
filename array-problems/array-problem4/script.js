/*Write a JavaScript function to remove duplicate numbers from an array of numbers.

Example array: [1,2,2,4,5,4,7,8,7,3,6]

NOTE: Do NOT use the Set method.

Method 1:
* Using array methods `indexOf() and filter()` to remove duplicates from an 
  array of numbers.
1. Declare and initialize an array of numbers called `lotteryNums`.
2. Define our function, named `removeDuplicates()` which accepts an array as a 
   parameter.
3. Declare a variable tobe used as `function expression` in which our array is
   filtered using `filter()` method.
4. The condition stipulated in our filter() method, which uses a callback function
   that accepts 2 parameters, `value and index` of each element in array and 
   checks if index of the element is strictly equal to indexOf() of element.
5. If condition results to true, it is stored n our variable named, uniqueNums.
6. This is returned as final value being an array with no duplicates.
7. Function is invoked and subsequently console logged to check if operational
   with no bugs.*/

const lotteryNums = [2, 10, 3, 2, 5, 8, 6, 5, 1, 10, 8, 9, 4, 2, 1, 4, 7, 10];

function removeDuplicates(arr4) {
    let uniqueNums = arr4.filter((value, index) => arr4.indexOf(value) === index);
    return uniqueNums;
}

removeDuplicates(lotteryNums);

console.log(removeDuplicates(lotteryNums));

/* Method 2 :
 * Using the array methods `forEach() and include()`
 1. Declare and initialise an array of numbers called `codeNums`
 2. Define your function name, `getUniqueNums` which accepts an array as a
    parameter.
 3. Declare and initialise an empty array to use and populate our unique numbers,
    after removal of duplicates.
 4. The function uses `forEach() method` on the array which iterates through each
    item in the array, using a callback function to check if the item is not 
    included in our empty array.
 5. If the stated conditional  statement is true, then the item is added to our       array using the `push() method`.
 6. The unique list is now returned outside the loop.
 7. Function is invoked and console logged to check if results in expected
    array.*/

const codeNums = [1, 1, 2, 3, 2, 1, 4, 5, 4, 5];

function getUniqueNums(list) {
    let newList = [];
    list.forEach((item) => {
        if (!newList.includes(item)) {
            newList.push(item);
        }
    });
    return newList;
}

getUniqueNums(codeNums);

console.log(getUniqueNums(codeNums));