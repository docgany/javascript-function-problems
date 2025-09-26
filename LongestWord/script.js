/* Our objective is to define a function that accepts a string, as a parameter and performs an operation to find the longest word and returns it as the output.

Personalising it, I did my function process with DOM manipulation as a way to get better at it and for that, i coded a form in my index.html file.
 ** The user interacts with it and inputs into the text field,
    The user input will be accessed and cached as a variable for usage.

**  An event listener is added to the form , which has been retrieved and stored in a variable too. This is to listen for a submit event that will trigger an event handler.

** The event handler triggered is the function we are to define.
** Since the input is a string, we use split() method with a space argument to convert it into array of words separated by comma.

** An empty string is declared and initialised for use in our conditional statement.

** This newly formed array will be parsed by a forEach() method which iterates on each item and with a conditional statement, checks if the length of each item is more than the length of our variable, longest.

** If condition met true, the item will be assigned to our variable ,longest.
N/B: We don't use increment assignment operator as we are looking for only the longest word only.

** What if we have more than one word meeting the our condition as the longest??? Hmmm!! yet to code that conditional statement.

**  In that case, i think we can put in a conditional statement for that, and updates it with increment assignment operator. We can output each one by indexing. Let's begin by first accessing, declaring variables, initialising.*/



/* We will code in e.preventDefault to avoid our input disappearing and being sent out by default, as we need them available for use in our function to be defined.*/

let form = document.getElementById("form1");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let userInput = document.getElementById("arr-words");
    let output = document.getElementById("word");
    let submitBtn = document.getElementById("submit-btn");
    let longest = "";

    if (userInput.value == "") {
        output.innerHTML = "Ensure you input a value in the form";
    } else {
        const words = userInput.value.split(" ");
        words.forEach((word) => {
            if (word.length > longest.length) {
                longest = word;
            }
        })
        output.textContent = `The longest word in your input is => ${longest}.`;
    }
    userInput.value = "";
});
