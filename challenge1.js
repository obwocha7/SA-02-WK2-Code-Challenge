//create an empty string
lettersChanged = '';

//create a function to perfom the changecase
function changeCase(str) {
  //create variable 'len' for length of the inputed words at 'str'
  const len = str.length;
  //create a for loop and use the charAt string method
  for (let i = 0; i < len; i++) {
    character = str.charAt(i);
    //create a if else condition to check if character is uppercase or lowercase
    if (character >= 'A' && character <= 'Z') {
      character = character.toLowerCase();
    } else {
      character = character.toUpperCase();
    }
    //add each converted letter to the empty string
    lettersChanged += character;
  }
}
//testing the function to check if it works
changeCase('The Quick Brown Fox');
//logging the results to the console
console.log(lettersChanged);
