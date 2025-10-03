/*Create an HTML page with a button and a P element with a link inside.

    Then, write a JavaScript function to get the HREF attribute of the link when you click the button.
When you click on it, display it on the webpage by adding it as the text for another P element on the page.*/

// First access your DOM elements and store in variables for easy usage and accessibilty.

/*add an event Listener to the button that triggers an event handler on click event, then define a function within which we use the `element.getAttibute() method to get its attribute value. Finally this is displayed in our empty paragraph with a string template string using the property `element.getAttribute();*/

const button = document.getElementById("btn");

button.addEventListener("click", function () {
    let para = document.getElementById("result");
    let link = document.getElementById("my-link");

    let output = link.getAttribute("href");
    para.textContent = `The value of HREF attribute is ${output}.`;
    para.style.border = "2px solid ";
});