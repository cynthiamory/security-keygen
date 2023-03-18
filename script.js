// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

// Critia prompts for password to generate
var uppercase = confirm("Does your password require an uppercase?");
var lowercase = confirm("Does your password require lowercase letter?");
var symbols = confirm("Does your password require the use of symbols?")
var numbers = confirm("Does your password resquire the use of numbers?")
var lengthOfPassword = prompt("Password must be minimum 8 characters and maximum 128 characters")

// Password variables for allowable passwords characters
var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
var lowercaseABC ="abcdefghijklmnopqrstuvwxyz";
var specialSymbols ="!@#$%^&*()?.<\>|=+:;,[-_]"
var numeric ="0123456789"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
