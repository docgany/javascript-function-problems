/* Write a JavaScript function that accepts two arguments, a string and a
    letter and the function will count the number of occurrences of the specified letter within the string.

    Using here another method which involves DOM manipulation by:

    Step 1: Access form element from our document object and store in a 
            variable `form` using `document.getElementById('form-control)

    Step 2: We add an even listener to our accessed form to listen for a form
            submit event, which will trigger our function written in arrow
            syntax with parameter, event object (e).

    Step 3: Next, we code in `e.preventDefault()`to override the default
            submission of our form inputs to a server so it can be used here.

    Step 4: We access and store the user inputs by ID method to get parameters;
            such as words (string) , letter and also access and store the paragraph variable, `para` where our result will be outputted in the html.

    Step 5: store the values of the user innputs in variables and also declare
            and initialise a count variable to keep counts for us.

    Step 6: Check for validation and output a prompt result when user inputs no 
            values in both words and letter text fields using `if..` statement.

    Step 7:  Run a `for.. loop` with statements:
               * declare and initialise i = 0, which represents the index of 
                 our string
               * conditional statement of i < length of our string since 
                 indexing starts from 0.
               * increment our index by 1 in each iteration.
     
    Step4: Nest an `if ..loop` that checks if the characters in our string at
           each index position as we iterate is strictly equal to our letter(2nd parameter or rather argument passed).

    Step 5: If conditional statement is met at each iteration, the counter 
            increments by 1.

    Step 6: Outside our loop, final value of counter is `returned` with a 
            template string stating how many occurrences of specified letter
            is in our string(user-input words) and outputted in out html with 
            `para.textContent`.

    Step 7: Defined function is invoked or triggered by submit event on our
            form.*/
                                                                                 

const form = document.getElementById("form-control");

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let words = document.getElementById("words-el");
    let letter = document.getElementById("letter-el");
    let para = document.getElementById("result");
    let word = words.value;
    let character = letter.value;
    let count = 0;

    if (word == "" || character == "") {
        para.textContent = "Enter a valid word or letter";
    }
    for (let i = 0; i < word.length; i++) {
        if (word[i] === character || word[i].toUpperCase() === character) {
            count++;
        }
    }
    return para.textContent = `The number of occurrences of the letter =>
    ${character} in our input words are ${count}`;
})