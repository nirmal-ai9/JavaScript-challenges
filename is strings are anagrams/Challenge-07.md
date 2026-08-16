# Challenge 7 — Check if Two Strings are Anagrams

## Problem Statement

Write a JavaScript program that takes two strings and returns whether they are anagrams of each other.

Don't change the function name in the template when writing your solution. Don't hardcode for only the test cases.

## Input Format

Two strings, `str1` and `str2`.

## Output Format

A boolean — `true` if `str1` and `str2` are anagrams of each other, `false` otherwise.

## Constraints

- `1 <= str1.length, str2.length <= 1000`
- `str1` and `str2` contain only lowercase English letters.

## Template

```js
function isAnagram(str1, str2) {
  // Change only this area
  return result;
}

module.exports = isAnagram;

if (require.main === module) {
    require("../../index.js")(__filename);
}
```

## Example

**Input**
```text
"listen", "silent"
```

**Output**
```text
true
```

**Explanation**

Both strings contain the exact same letters with the same frequency, just in a different order, so they are anagrams.
