/*Write a JavaScript function that takes in two parameters, an array and a number(n), and return the first n elements of that array.


Method 1:

1. define a function that takes in arr, n as parameters.
2. declare and initialize an empty array to store our extracted array.
3. 3 conditional statements to validate entry and no negative number (n) entered and that n doesn't exceed the length of our inputted array.
4. Using `a for loop` to iterate the loop by using parameter (n) as our length, as array is zero-index and obtain the number of elements we want with values depicted with arr[i]
5. Using push method, the arr[i] which consist of the desired extracted items is pushed into our empty array which is then returned.
6. console.log to check if works well.*/


let arr1 = [2, 5, 7, 9, 10, 4, 3];
let nm = 3;

function getArrCopy(arr, n) {
    const newArr = [];
    if (arr === "" || n === "") {
        return "Enter a valid array and number.";
    }
    if (n < 0) {
        return "Enter a positive number.";
    }
    if (n > arr1.length) {
        return "Array only has " + arr.length + " items.";
    }
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
    console.log(newArr);
}

getArrCopy(arr1, nm);

console.log(getArrCopy(arr1, nm));


/* Method 2: Using Array.slice() method to select elements in an array, which is our parameter, list from a given index (default is 0) up to a specified (not inclusive) element which will be our parameter, num.
Don't forget arrays are zero indexed.
 We validate entry with the 3 conditional statements as already mentioned above.
 Then using slice() method, we save our new array in variable called result which is returned*/

let words = ["tradition", "culture", "native", "diversity", "evolution", "interests"];
let measure = 4;


function arrSliced(list, num) {
    if (list === "" || num === "") {
        return "Enter a valid array and number.";
    }
    if (num < 0) {
        return "Enter a positive number.";
    }
    if (num > list.length) {
        return "Array only has " + list.length + " items.";
    }
    const result = list.slice(0, num);
    return result;
    console.log(result)
}

arrSliced(words, measure);
console.log(arrSliced(words, measure));


