/*Create a basic HTML page with a P element and a button on it.

    Then, write a JavaScript function to set the background color of that paragraph using an "onclick" event added to a button in the UI.

    ** define the function using keyword `function`
   
       Access the paragraph using ID and store in a variable

       declare an array of different color names

       declare randomColor using `Math.floor()`and `Math.random()` which
       is multiplied by length of the array of colors.

       Using a `for..loop`to iterate through array of colors while incrementing
       it by 1.

       You use the `square bracket notation` to access value of each item with their indexes, which is now replaced with randomColor,
       Hence, `colors[randomColor];`

       Outside the loop, still within the function code block;
       assign to the paragraph element stored as para, using dot notation to
       first access the style, then the backgroundColor, the differnt items
       in the array accessed with randomised indices.*/


function changeBackgroundColor() {
    let para = document.getElementById("result");
    const colors = ["white", "blue", "pink", "yellow-green", "red", "coral"];
    const randomColor = Math.floor(Math.random() * 6)
    for (let i = 0; i < colors.length; i++) {
        colors[randomColor];
    } 
    para.style.backgroundColor = colors[randomColor];
}
changeBackgroundColor();

