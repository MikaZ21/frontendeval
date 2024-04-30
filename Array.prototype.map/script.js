const myArray = [1,2,3,4,5];

// Crete 'map' function that takes an array and a call back function as arguments.
function map(array, callback) {
    // Initialize an empty array 'mappedArray'.
    const mappedArray = [];
    // Iterate over each element of the input 'array' using a 'for' loop.
    for(let i= 0; i < array.length; i++) {
        // For each element, call the 'callback' function with the current element as an argument,
        // and push the result of the callback into the 'mappedArray'.
        mappedArray.push(callback(array[i], i));
    }

    // Return the 'mappedArray' containing the transformed elements.
    return mappedArray;
}

// This custom 'map' function behaves similarly to the built-in 'map function in JavaScript.
const mappedArray = map([1,2,3,4,5], (x) => x* 2);
console.log(mappedArray); // [ 2, 4, 6, 8, 10 ]


// From just created 'map' function, pass the current index to the callback. 
map(myArray, (x, i) => {
    console.log(`Element ${x} is at index ${i}`);
    return x;
  });
// Element 1 is at index 0
// Element 2 is at index 1
// Element 3 is at index 2
// Element 4 is at index 3
// Element 5 is at index 4