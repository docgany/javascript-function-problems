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
    ${character} are ${count}`;
})