/*Create an array of people objects with first name, last name, and age, then write a JavaScript function that takes in an array and console logs the first and last names of all the people.

Method 1:
1. Declare and initialize an array of `people`objects with first, last name and
   age as instructed above. 
2. Define a function named, getFullNames()`which takes in our array of objects
   as a parameter.
3. Declare and initialize an empty string called `fullName` with intent to 
   store our result using addition assignment operator to update it a string format
4. Iterate over elements of our array using `for..loop`.
5. At each iteration cycle, you access the first and second item of each object
   elements in the array using the double square bracket notations.
6. First bracket index is to access each array element, which are the objects
   containing 3 key-value items.
7. Second bracket indexing is to access the items in each object and this 
    should have quotation marks around it.
8. String concanetation is used as seen with `\n` for line breaks to output it
   in a presentable format.
9. As our output string in each iteration updates the string`fullname`, this is
   returned outside the loop.
10. Function is invoked and argument, people passed. console logged to check
    output.
N/B: Ignore the code block which i commented out as was used as a clarifying 
     and learning process for me, hence my hesitation in deleting it.

*/

const people = [
    { firstName: "Grace", lastName: "Okengwu", age: 34 },
    { firstName: "AJ", lastName: "Oyeniyi", age: 39 },
    { firstName: "Prince", lastName: "Ndukwe", age: 26 },
    { firstName: "Mary", lastName: "Sheilo", age: 21 },
    { firstName: "Laura", lastName: "Brown", age: 23 },
    { firstName: "Carolina", lastName: "Gouza", age: 25 },
    { firstName: "David", lastName: "Ude", age: 14 },
    { firstName: "Favour", lastName: "Kalu", age: 16 }
];

/*console.log(Array.isArray(people));
console.log(typeof people);
console.log(people.length);
console.log(people[1]);
let myName = people[0]["age"];
console.log(myName);*/

function getFullNames(arrObj) {
    let fullName = "";
    for (let i = 0; i < arrObj.length; i++) {
        fullName += arrObj[i]["firstName"] + " " + arrObj[i]["lastName"] + "\n";
    }
    return fullName;
}

getFullNames(people);

console.log(getFullNames(people));
  