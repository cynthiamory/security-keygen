// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

// Critia prompts for password to generate
var uppercase

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);