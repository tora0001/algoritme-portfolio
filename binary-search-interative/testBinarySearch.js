import { binarySearch, compare, stringcomparefunction, namecomparefunction } from "./BinarySearch.js";
import { values, ordliste, persons } from "./Data.js";

function searchOut(value, index) {
  if (index == -1) console.log(`Could not find ${value} in index`);
  else console.log(`Found ${value} at index: ${index}`);
}

// Test with numeric values
let valueToFind = 29;
let index = binarySearch(valueToFind, values, compare);
searchOut(valueToFind, index);

// Test with Danish words
let wordToFind = "gaardejer";
let wordIndex = binarySearch(wordToFind, ordliste, stringcomparefunction);
searchOut(wordToFind, wordIndex);

// Test with persons
let personToFind = "Ron Weasley";
let personIndex = binarySearch(personToFind, persons, (search, person) => namecomparefunction(search, person));
searchOut(personToFind, personIndex);

// Additional test
let additionalIndex = binarySearch(23, values, compare);
console.log(`Talet fundet på ${additionalIndex}`);
