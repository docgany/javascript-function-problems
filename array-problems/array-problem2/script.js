/*Define a function that takes in an array of elements and joins them together into a string separated by a comma with a space after the comma.
Example array: let colors = ["Red", "Green", "White", "Black"];
Should look like: "Red, Green, White, Black"
Do NOT use the "toString" method.

Method 1:
1. Declare and initialise an array called `colors`.
2. Define our function with keyword `function`which accepts an array as a
   parameter and returns it as a string. 
3. Using the array.join(separator) method which joins the elements of an array using the 'separator' operator provided, in this case our separator will be (', '), we convert the array to a string stored as result, which is then returned.
4. Console logging result and function is to debug and ensure no errors.*/

let colors = ["blue", "purple", "violet", "orange", "red", "yellow", "green"];

function getStr(arr2) {
    const result = arr2.join(", ");
    return result;
    console.log(result);
}

getStr(colors);

console.log(getStr(colors));


/*  Method 2 : 
1. Declare and define an array called `fruits`
2. Define our function with name, `convertToStr(arr3)` that takes i an array as 
   a parameter.
3. Declare and initialise an empty string.
4. Using JavaScript foreach() method with string concatenation, we iterate
   over each and every element and manually concatenates them into the string.
5. Using the assignment operator to concatenate each element to the empty
   string with a trailing ", " which ensures the elements are separated by commas as intended.
6. the empty string now populated is returned. function is invoked and console
  logged to see if works. Using `typeof` to check result validates it as a string.*/

const fruits = ["orange", "peach", "banana", "apple", "grapes", "lemon"];

function convertToStr(arr3) {
    let emptyStr = "";
    arr3.forEach((item) => {
        emptyStr += item + ", ";
    });
    return emptyStr;
    console.log(emptyStr);
}

convertToStr(fruits);

console.log(convertToStr(fruits));
