/* Define a function that takes in an array of numbers/integers and returns the sorted version of that array, greatest to least. (Note: do NOT use the "reverse" method.)

Example array: const myArray = [-3,8,7,6,5,-4,3,2,1];

Hint: To solve this, look up the JavaScript array sort method, and pay close attention to how it uses its return values of 1, 0, -1 to sort items*/

/* The best way to sort an array accurately is to use the comparison function which defines the accurate sorting order , in which a comparison function is passed into the sort() method. This is because buit-in sort() method sorts elements by first converting them to strings, then compare them by their Unicode
code points, which can give misleading results.
  However, passing a comparison function eliminates this problem, as it subtracts the second number from first number and ultimately,define an accurate sorting order.
  Method 1:
1. Declare and initialize an array in a variable, named `ratings`
2. Define a function named, `sortedArr()`which takes an array as a parameter 
   and withi the function code, the array.sort() method is used with a comparison function as seen below.
3. The comparison function takes two elements of the array and subtracts second 
   element from the first, `a - b` which yields sortig in ascending pattern, whereas if `b - a ` is coded, a descending pattern of sorting is returned.
4. The resultant array is returned . However this method modifies the original 
   array unlike the second method below , which first gets a copy of initial array before operating on it.*/


const ratings = [5, 2, 7, 10, 20, -3, 6, -11, 9, 15, -1];

function sortedArr(arr3) {
    arr3.sort((a, b) => a - b);
    return arr3;
    console.log(arr3);
}

sortedArr(ratings);

console.log(sortedArr(ratings));

/*The ` array.sort() method` modifies the original array while sorting. To maintain the original order of the original array without modifying it, we can make a copy of it using slice() method before appending the sort()method witha callback fuction, comparison function, with which we perform the operation and store resultant array in a new variable. console logging the returned new array and original array can show no modification of original array in this second method.*/

const scores = [20, 15, 0, -6, 3, 33, -25, 8, 10, -2, -9, -4, 7, -3];

function newSortedArr(list) {
    const newArr = list.slice().sort((a, b) => a - b);
    return newArr;
    console.log(newArr);
}

newSortedArr(scores);

console.log(newSortedArr(scores));

console.log(scores);

