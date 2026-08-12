# Challenge 2 — Reverse a String

## Problem Statement

Write a JavaScript program that takes a string and returns the string in reverse order.

Don't change the function name in the template when writing your solution. Don't hardcode for only the test cases.

## Input Format

A single line containing a string, `str`.

## Output Format

The input string reversed.

## Constraints

- `1 <= str.length <= 1000`
- The string may contain letters, numbers, spaces, and special characters.

## Template

```js
function reverseString(str) {
  // Change only this area
  return result;
}

module.exports = reverseString;

if (require.main === module) {
    require("../../index.js")(__filename);
}
```

## Example

**Input**
```text
hello
```

**Output**
```text
olleh
```

**Explanation**

The characters of `hello` are reversed:

`h → o`, `e → l`, `l → l`, `l → e`, `o → h`
