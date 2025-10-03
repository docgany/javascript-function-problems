/* Write a JavaScript function that accepts two arguments, a string and a
    letter and the function will count the number of occurrences of the specified letter within the string.

    Step 1: We will declare our variables(parameters) and initialise with
            hard-coded values outside the function code as our arguments, as well as, declare and initialise a counter with value of 0 to keep counts i each iteration within our function.

    Step 2: define our function name `letterCount` using the function keyword
           followed by paratheses, containing string and letter as our parameters.

    Step 3: Within our function block code, we run a `for.. loop` with
           statements:
      * declare and initialise i = 0, which represents the index of our string
      * conditional statement of i < length of our string since indexing starts 
        from 0.
      * increment our index by 1 in each iteration.
     
    Step4: Nest an `if ..loop` that checks if the characters in our string at
           each index position as we iterate is strictly equal to our letter(2nd parameter or rather argument passed).

    Step 5: If conditional statement is met at each iteration, the counter 
            increments by 1.

    Step 6: Outside our loop, final value of counter is `returned` with a 
            template string stating how many occurrences of specified letter
            is in our sting.

    Step 7: Invoke or function and see if working well*/


let a = "This is a javascript function problem";
let b = "i";


function letterCount(string, letter) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            counter++;
        }
    }
    return `the string contains ${counter} occurrences of ${letter}`;
}
console.log(letterCount(a, b));

letterCount(a, b);
    
