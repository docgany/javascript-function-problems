/*Create a sample object, then write a JavaScript function that deletes the property of an object passed to it.

Your JavaScript function should take in two parameters, the object and the key / property you want to delete.

To help you here, Google "javascript access object property".

The most direct way to remove a property from a JavaScript object is by using the `delete operator` which mutates the original object and also doesn't affect the object's prototype.
1. Declare an object, stored in variable, person and initialise (object literal
   method).
2. Using keyword, `function`, define a function named `deloObjProperty` that
   accepts 2 parameters; collection and item which are data types, object and property.
3. Perform operation using arguments passed with syntax `delete object[key]` 
   within the function body.
4. I console logged my object, person to display it's key-value pairs.
   Then, invoke the function passing my object, `person`and one of the keys `age` to delete this specified property.
5. After function invocation, console logged my object, `person`to verify and
   which shows property is has been deleted, mutating the object as well.*/


const person = {
    name: "Grace Ude",
    age: 30,
    profession: "Doctor",
    status: "Married",
    gender: "female"
};

function delObjProperty(collection, item) {
    delete collection[item];
}

console.log(person);

delObjProperty(person, "age");

console.log(person);
