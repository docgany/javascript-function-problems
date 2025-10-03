/*Create an HTML page with a dropdown list with three items in it, then write a JavaScript function that displays the number of items and displays the selected item in the list when you select from the dropdown.*/

const selectEl = document.getElementById("drpdown-list");
let countEl = document.getElementById("item-count");
let listValues = document.getElementById("list-values");
let result = document.getElementById("ouput");
let i = selectEl.selectedIndex;
result.textContent = selectEl.options[i].text;
countEl.textContent = selectEl.options.length;

let txt = "";
for (let i = 0; i < selectEl.length; i++) {
    txt = txt + selectEl.options[i].text + "  ,";
    return txt;
}

console.log(txt);



/*selectEl.addEventListener('onchange', (e) => {
    e.preventDefault;
   
    
})*/