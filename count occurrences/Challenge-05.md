# Challenge 5 — Count Occurrences

## Problem Statement

Write a JavaScript program that takes an array and a value, then returns how many times that value appears in the array.

Don't change the function name in the template when writing your solution. Don't hardcode for only the test cases.

## Input Format

Two parameters:

- An array of values, `arr`.
- A value to search for, `target`.

## Output Format

A single integer representing the number of times `target` appears in `arr`.

## Constraints

- `1 <= arr.length <= 1000`
- The array contains integers.
- `target` is an integer.

## Template

```js
function countOccurrences(arr, target) {
  // Change only this area
  return result;
}

module.exports = countOccurrences;

if (require.main === module) {
    require("../../index.js")(__filename);
}
```

## Example

**Input**
```text
[1, 2, 2, 3, 2], 2
```

**Output**
```text
3
```

**Explanation**

The value `2` appears 3 times in the array.
