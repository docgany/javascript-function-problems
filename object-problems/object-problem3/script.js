/*Create an object with three items in it, then write a JavaScript function that accepts an object and tells you the length (tells you how many items are in it) of the object.

Objects lack built-in methods to help get the length, whereas Arrays and Strings have the length property.
To get length of objects, 3 common ways are use of 
1. Object.values(myObj).length;
2. Object.keys(myObj).length;
3. Object.entries(myObj).length;

The above 3 methods are object methods to access enumerable properties of the object, outputting them in an array. Hence making it easier to get the length of the objects. From the first too the third listed above, gets the values , keys, key-value pairs of the object into an array.

I declared and initialized my object with only 3 items as stated in the instructions, defined a function that an object as  a parameter and using the listed methods , gets the length which is saved in a variable reult.
This is returned in a string literal format as shown below.

However, the last method(Method4:), within  my function, i declared a counter variable initialized to the value of zero to keep count of the items in our object, then, using the "in" operator to check for the key in the object, followed by an if statement to check if object `hasOwnProperty(key)`, if condition is true, the counter increments at each iteration.
Result is returned outside the loop with a string literal format. All functions are invoked with different arguments pased and logged to console to check for bugs.*/

//Method 1:
const professionals = {
    doctors: "surgeons",
    nurses: "matrons",
    tech: "Programmers"
};

function getLength(obj) {
    let result = Object.keys(obj).length;
    return result;
}

getLength(professionals);

console.log("There are " + getLength(professionals) + " items in this object.");

//Method 2 
const students = {
    name: "Alice",
    department: "Engineering",
    years: 6
};

function findLength(obj2) {
    let result = Object.values(obj2).length;
    return result;
}

findLength(students);

console.log("We have " + findLength(students) + " items in our object.");


//Method 3 
const family = {
    mother: "Grace",
    father: "Victor",
    son: "David"
};

const numberOfItems = function (obj3) {
    let result = Object.entries(obj3).length;
    return result;
};

numberOfItems(family);

console.log("This object has only " + numberOfItems(family) + " items in it.");


// Method 4 
const planner = {
    work: "Doctor",
    duration: 10,
    certificate: true
};

function itemCount(obj4) {
    let counter = 0;
    for (let key in obj4) {
        if (obj4.hasOwnProperty(key)) counter++;
    }
    return counter;
}

itemCount(planner);

console.log(itemCount(planner) + " items found here.");
