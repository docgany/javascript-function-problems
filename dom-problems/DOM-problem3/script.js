/*Create an HTML page with a dropdown list with three items in it, then write a JavaScript function that displays the number of items and displays the item in the list when you select from the dropdown.
STEP1: Add EventListeners; onchange to the select element and button repectively. And thisis after accessing and storing this elemnents in a variable for easy usage.
Stage2: define the function that displays the lenghth of the drop-down items and also outputs the values of the items as strings by looping. through the arrray.
Stage3: Using the 'change'event' event handler triggered when we select another drop-down item, we run a function which we will define next now*/

const selectEl = document.getElementById("mySelect");

selectEl.addEventListener('change', () => {
    let y = selectEl.value;
    document.getElementById("selectedItem").textContent = `You selected : ${y}`;

    let txt = "";
    for (let i = 0; i < selectEl.length; i++) {
        txt += selectEl.options[i].text + " , ";
    }
    document.getElementById('items').textContent = `The items in the drop-down list are as follows:
     ${txt}`;
    document.getElementById("item-length").textContent = `There are ${selectEl.options.length} items in the drop-down list.`;
})                                                                                                                                                                        