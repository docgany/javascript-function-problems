/*Create an object, then write a JavaScript function that checks whether an object contains the specified key.
 */

/* Method 1 : 
1. Create an object named `cars` populated with its key:value pairs using object literal
   syntax.
2. Define a function named `hasKey()` which accepts 2 parameters; the object and the
   specified key we want to check for its existence.
3. Using the `in` operator to check if key exists in the object in an `if..else`
   conditional statement and this returns a boolean value, true or false.
4. If condition is true, that is key is contained in object, return a string literal
   stating so. However, if false, output this in a return statement as well.
5. Invoke function and pass in our object `cars` and key `rating`. Note that the key is 
   written with quotes `" "`.*/

const cars = {
    model: "Volvo",
    year: 2020,
    mileage: 3000,
    fuel: "diesel",
    rating: "high"
};

function hasKey(obj, key) {
    if (key in obj) {
        return `This object contains the specified key: ${key}.`;
    } else {
        return `The key: ${key} is not in the object`;
    }
}

hasKey(cars, "rating");

console.log(hasKey(cars, "rating"));
console.log(hasKey(cars, "owner"));

/* Method 2: 
1. Create an object named `family` using object literal syntax.
2. Define a function named `objHasKey` that accepts the object and specified key as
   parameters.
3. Within the function code block, Using the `hasOwnProperty` which checks if a property 
   exists directly in an object (not its prototype chain), we check for the specified key
   in the object in an `if..else` statement.
4. If condition evaluates true, returns a string literal attesting to the key found in the
   object and if false, returns not found.
5. Invoke function passing in our object and specified key written in quotation marks.
6. Console.log to check and debug */

const family = {
    parents: true,
    children: 5,
    GrandParents: "isAlive",
    house: "rented",
    status: "married",
    relatives: 15
};

function objHasKey(obj1, property) {
    if (obj1.hasOwnProperty(property)) {
        return `The key: ${property} is present in this object.`;
    } else {
        return `key not found.`;
    }
}

objHasKey(family, "children");

console.log(objHasKey(family, "children"));
console.log(objHasKey(family, "address"));

/*Method 3:
1. Using `Object.keys() and Array.includes() method`
2. Create an object named '' with same syntax as above.
3. Define a function named `isKeyInObj()` that accepts 2 parameters which are the object
   and specified key to check for.
4. Within the function code, write a conditional statement that uses `Array.includes()` 
   method to check if key is in the array of keys created with `Object.keys()` method.
5. If conditional statement evaluates true, return boolean value; true, else false.
   Hence, this last defined function returns a boolean value
6. Invoke function and pass in our arguments.
7. Console log to see our result and debug if necessary. */

const matter = {
    liquid: "water",
    solid: "table",
    gas: "air",
    semisolid: "mayonnaise",
    semihard: "cheese"
};

function isKeyInObj(obj3, key3) {
    if (Object.keys(obj3).includes(key3)) {
        return true;
    } else {
        return false;
    }
}

isKeyInObj(matter, "gas");

console.log(isKeyInObj(matter, "gas"));
