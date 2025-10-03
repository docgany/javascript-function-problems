/* Write a JavaScript function that iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers that are multiples of both three and five print "FizzBuzz".*/

/* Step 1: define a function named "findMultiple" using keyword "function"

   Step 2: within the function code block, use a `for..loop`to write 3  statements
     *initialise a variable num with a value of 1
     *conditional statement of num <= 100, to include integer 100
     *increment our variable, num by 1 in each iteration
    
   Step 3: Nest an `if..else` statements checking first for 
     * multiples of both 3 and 5 by using the modulos operator,
        if condition met, print "FizzBuzz"
     * multiples of 3 as number divided by 3 which gives zero remainder is 
        a multiple of 3. If condition is met with `else-if`, print 'Fizz'
     * multiples of 5 with same method as above and if met, print "Buzz".
     * ending with else, for nums that don't meet the specified conditions, 
       to print "Not a multiple of 3 and/or 5".

   Step 4: The invoke the function and check code*/


function findMultiple() {
    let result = "";
    for (let num = 1; num <= 100; num++) {
        if (num % 3 === 0) {
            result += "Fizz";
        }
        if (num % 5 === 0) {
            result += "Buzz";
        }
        console.log(result);
        result = "";
    }
}

findMultiple();



/* Another method to achieve same that i learnt recently is to create an array 
   called 'arr100'and initialise by calling an array method, Array(100) which specifies number of elements in the array as 100, i.e the length.

   then by calls an array method of the new array `Array.fill(1)`which fills up the elements of the new array with integer 1.

   Using map function on the array, the callback function takes in as parameters the element of the array (n) and index (i) and performs a function on it by summing them in each iteration.

   Final product when console logged shows an array containing integers 1 to 100 was initialised.

   *define our function called findMultiples which accepts our new array, 
    arr100 as a parameter and within the code block,
    
      use the Array.forEach() method to perform an operation on each item checking them with the `if..else`loop for the conditions already enumerated above.*/

const arr100 = Array(100)
    .fill(1)
    .map((n, i) => n + i);
console.log(arr100);

function findMultiples(arr100) {
    arr100.forEach((item) => {
        if ((item % 3 === 0) & (item % 5 === 0)) {
            console.log("FizzBuzz");
        } else if (item % 3 === 0) {
            console.log("Fizz");
        } else if (item % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log("Not a multiple of 3 or/and 5.");
        }
    });
}

findMultiples(arr100);
