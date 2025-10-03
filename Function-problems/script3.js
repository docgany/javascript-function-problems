/*Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

Step 1: We declare and initialise our variable, string which will be passed as
        an argument for our function with hard coded values.

Step 2: Using keyword `function`, we define our function name, longestWord()
        which accepts string as a parameter.
    
Step 3: To enable us get the longest word in our string, we need to convert it
        to an array of words using String.split(" ") method, where the separator
        is a space, as seen below. This is stored in a variable, `arrWords` and 
        console log to see if correct output.

Step 4: We declare a variable, longest and initialise it as an empty string 
        essentially as has 0 length.

Step 5: Using `Array. forEach()`method on the `arrWords`, we perform an 
        operation on each item of the array using a callback function.

Step 6: This uses an `if..statement`, to compare length of each item in the 
        array with length of longest with a comparison operator >.

Step 7: If longer than `longest`, we assign that item to the variable, 
        `longest`, not updating it. In that way, at end of iteration, we 
        end up with the item with greatest length assigned to `longest`.

Step 8: Outside the loop, this is returned as a string template literal.

Step 9: We invoke our function to call it into action and log to console 
        to view if correctly working.*/


        
let c = "I have been struggling lately to make out time to finish my projects.";

function longestWord(string) {
    const arrWords = string.split(" ");
    let longest = "";
    //return console.log(arrWords);
    arrWords.forEach((item) => {
        if (item.length > longest.length) {
            longest = item;
        }
    });
    return `The longest word in our string is ${longest}`;
}

longestWord(c);

console.log(longestWord(c));
