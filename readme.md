# Challenge 1:

# Case Conversion Function

This JavaScript code includes a function `changeCase(str)` that converts the case of each letter in a given string. Uppercase letters are converted to lowercase, and lowercase letters are converted to uppercase.

## Usage

To use this function, follow these steps:

1. Call the `changeCase(str)` function and pass a string `str` as input.
2. The function will return the input string with the case of each letter reversed.

Example usage:

```javascript
changeCase('The Quick Brown Fox');
// Output: 'tHE qUICK bROWN fOX'
```

# Notes

1. Special characters, digits, and spaces are not affected by the case conversion.
2. This function only converts the case of alphabetic characters.

# Challenge 2:

# Return Number Range Function

This JavaScript function `num(num1, num2)` takes in a range of two numbers and returns an array containing all the numbers within that range.

## Usage

To use this function, follow these steps:

1. Call the `num(num1, num2)` function and pass two numbers `num1` and `num2` as input.
2. The function will return an array containing all the numbers within the specified range.
3. If num1 is less than num2, the function returns an array containing number incrementally from num1 to num2.
4. If num1 is greater than num2, the function returns an array containing numbers decrementally from num1 to num2.
5. If num1 is equal to num2, the function returns an array containing only that number.

Example usage:

```javascript
num(3, 8);
// Output: [3, 4, 5, 6, 7, 8]

num(9, 2);
// Output: [9, 8, 7, 6, 5, 4, 3, 2]

num(11, 11);
// Output: [11]
```

# Challenge 3:

# Prime Number Finder

This JavaScript function `prime(num1)` finds prime numbers within each range defined by consecutive elements in an input array.

## Usage

To use this function, follow these steps:

1. Call the `prime(num1)` function and pass an array of numbers `num1` as input.
2. The function will output an array containing all the prime numbers within the ranges defined by consecutive elements in the input array.

Example usage:

```javascript
prime([2, 4, 6, 8, 9, 11, 13, 17]);
// Output: [2, 3, 5, 7, 11, 13, 17]
```
