/*Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

Step 1: declare and initialise our parameter, string with a hard coded value.

Step 2: Using keyword `funnction`, define a function called numberOfVowels()
        which takes the declared variable string as an argument.
    
Step 3: declare and initialise a variable, ` arrVowels` which is an array of 
        vowels in lower cases, so our function can identify which are vowels.

Step 4: create and initialise a counter to a value of 0 to keep counts by 
        incrementing.

Step 5: Convert our string to lowercases first using string method, 
        ` toLowerCase()` and then using a split() method with an empty
        separator as parameter( not a space separator) to convert finally
        to an array of letters of the string in all lowercases. This is 
        because my created `arrVowels` all contain only lowercases.This is 
        stored in a variable, called ` arrLetters` .

Step 6: Using `Array.forEach()` method on the arrLetters that uses a callback
        function on each letter of the array . This callbackfunction with each
        letter as a parameter checks if the letter of the array, arrLetters is included in the array of vowels with `Array.includes()` method.

Step 7: If condition met true, it increments the counter by 1

Step 8: Outside the loop, we return a string template literal that states
        number of vowels contained in the string.

Step 9: We invoke or call our function to action. We can also log it to
        the console to make sure our functio n is working properly.*/



let string = "Our family is going away on vacation this Summer";


function numberOfVowels(string) {
    const arrVowels = ["a", "e", "i", "o", "u"];
    let counter = 0;
    const arrLetters = string.toLowerCase().split("");
    //return console.log(arrLetters);
    arrLetters.forEach((letter) => {
        if (arrVowels.includes(letter)) {
            counter++;
        }
    });
    return ` The number of vowels in the inputted string are ${counter}`;
};

numberOfVowels(string);

console.log(numberOfVowels(string));
