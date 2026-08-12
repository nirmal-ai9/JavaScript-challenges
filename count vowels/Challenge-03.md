# Challenge 3 — Count Vowels

## Problem Statement

Write a JavaScript program that takes a string and returns the number of vowels in it.

Count the vowels `a`, `e`, `i`, `o`, and `u`. Treat uppercase and lowercase letters as the same.

Don't change the function name in the template when writing your solution. Don't hardcode for only the test cases.

## Input Format

A single line containing a string, `str`.

## Output Format

A single integer representing the number of vowels in `str`.

## Constraints

- `1 <= str.length <= 1000`
- The string may contain uppercase letters, lowercase letters, spaces, numbers, and special characters.

## Template

```js
function countVowels(str) {
  // Change only this area
  return result;
}

module.exports = countVowels;

if (require.main === module) {
    require("../../index.js")(__filename);
}
```

## Example

**Input**
```text
Hello World
```

**Output**
```text
3
```

**Explanation**

The vowels are `e`, `o`, and `o`, so the result is `3`.
