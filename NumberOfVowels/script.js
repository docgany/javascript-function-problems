/* Objective is to define a function that takes in a string and 
   counts how many vowels within the string.
    => We begin by cache the DOM by accessing html elements and storing
       them in variables for easy access.

     => Optionally, I, also defined a function to reset input values after
        the operation is over which is to be used later as a callback function passed into setTimeOut() function.

    Access the form by ID and store in a variable "form".
   Add an event listener to our form for a submit event which will
   trigger our function (event handler)
   Override the default browser response to submitted forms with code below
   This will ensure the user inputs remain in the form to be utilised by us.
    Create an array of vowels through array literal method so our function
   will know which is a vowel when running our code.
   Declare and initialise a counter variable to keep counts during iteration. We also access our user input and output div by their id attributes and save as variables to be referenced later.
    Validate our data by checking if our user input is not empty before
   running our operation with an if.. statement.
   We then convert our string to an array of letters using string method; split() and passing an empty string, in order to get an array of letters, not words.
   Then run array method, forEach() method using an arrow function to apply a callback function; includes() on each letter in our array that checks if containd in our array of vowels.
   If condition is met, our counter increments by 1.
   After looping, final counter is outputted in a string template literal .
   Finally, form fields are resetted to empty , awaiting next imput.*/


let form = document.getElementById("myForm");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const arrVowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let counter = 0;
    let output = document.getElementById("result");
    let text = document.getElementById("user-words");

    if (text.value == "") {
        output.innerHTML = "Enter a valid word or sentence";
    } else {
        const letters = text.value.split("");
        letters.forEach((letter) => {
            if (arrVowels.includes(letter)) {
                counter++;
            }
        })
        output.textContent = `The words inputted in the form contains ${counter} vowels in it`;
    }
    text.value.textContent = "";
})

setTimeout(function reset() {
    document.getElementById("user-words").value.textContent = "";
    document.getElementById("result").value.textContent = "";
}, 2000);


