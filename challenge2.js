//create a function that takes in a range of two numbers
function num(num1, num2) {
  //create an empty array
  arr = [];
  //check if the first number is lesser than the second number
  if (num1 < num2) {
    //create a for loop that pushes the the numbers to the empty array incrementally starting from the first number
    for (let i = num1; i <= num2; i++) {
      arr.push(i);
    }
    //if the first number is greater than the second number
  } else if (num1 > num2) {
    //create a for loop that pushes the the numbers to the empty array decreasing starting from the first number

    for (let i = num1; i >= num2; i--) {
      arr.push(i);
    }
    //id the numbers are equal, then push the number to the empty array
  } else {
    arr.push(num1);
  }
  //log the array to the console
  console.log(arr);
}
//tests for all scenarios
num(3, 8);
num(9, 2);
num(11, 11);
